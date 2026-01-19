import Image from "next/image";
import { Button } from "@boldmind/ui/button";
import { Card, CardContent, CardFooter } from "@boldmind/ui/card";
import { Badge } from "@boldmind/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@boldmind/ui/tabs";
import Link from "next/link";
import { db, PopulatedPostLean } from "@boldmind/database/mongodb";
import { getAllCategories, getTrendingPosts } from "@boldmind/database/helpers";
import SearchBar from "@/components/SearchBar";
import PopularPosts from "@/components/PopularPosts";
import TrendingCarousel from "@/components/TrendingCarousel";
import AdBanner from "@/components/AdBanner";
import ShareButtons from "@/components/ShareButtons";
import { TrendingUp, Clock, Eye, Check, Brain, Zap, Users, Target } from "lucide-react";
import type { Category } from "@/types/post";
import NewsletterForm from "@boldmind/ui/newsletter-form";
import Script from "next/script";
import mongoose from "mongoose";
import { EcosystemBadge, ProductCard } from "@boldmind/ui/ecosystem";
import { getColorScheme } from "@boldmind/utils/colors";

// Get AmeboGist color scheme
const ameboColors = getColorScheme('amebogist');

export const revalidate = 60;

async function fetchCategories(): Promise<Category[]> {
  return await getAllCategories();
}

async function fetchPosts({
  limit = 9,
  skip = 0,
  category = "",
  sortBy = "latest",
}: {
  limit?: number;
  skip?: number;
  category?: string;
  sortBy?: "latest" | "trending";
} = {}): Promise<{ posts: Array<{
  _id: string;
  title: string;
  excerpt: string;
  category: {
    _id: string;
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
  };
  author: { name: string; avatar?: string };
  imageUrl: string;
  slug: string;
  views: number;
  createdAt: string;
  source: string;
  commentary?: string;
  isSponsored?: boolean;
  boldmindProduct?: string;
}>; total: number }> {
  try {
    await db.connect();
    const query: { status: string; category?: mongoose.Types.ObjectId } = { status: "published" };
    if (category) {
      const categoryObj = await db.category.findOne({ slug: category }).lean();
      if (!categoryObj || Array.isArray(categoryObj)) throw new Error(`Category ${category} not found`);
      query.category = new mongoose.Types.ObjectId((categoryObj as { _id: mongoose.Types.ObjectId })._id);
    }
    const sort: Record<string, 1 | -1> = sortBy === "trending"
      ? { views: -1 as const, createdAt: -1 as const }
      : { createdAt: -1 as const };
    const posts = await db.post
      .find(query)
      .populate("category", "name slug metaTitle metaDescription")
      .populate("authorId", "name avatar")
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean() as unknown as PopulatedPostLean[];
    const total = await db.post.countDocuments(query);
    return {
      posts: posts
        .map((post) => ({
          _id: post._id.toString(),
          title: post.title,
          excerpt:
            post.excerpt ||
            (post.content?.replace(/<[^>]*>/g, "")?.substring(0, 160) || "") + "...",
          category: post.category
            ? {
                _id: post.category._id.toString(),
                name: post.category.name || "Uncategorized",
                slug: post.category.slug || "uncategorized",
                metaTitle: post.category.metaTitle || "",
                metaDescription: post.category.metaDescription || "",
              }
            : { _id: "", name: "Uncategorized", slug: "uncategorized", metaTitle: "", metaDescription: "" },
          author: post.authorId
            ? { name: post.authorId.name || "BoldMind Team", avatar: post.authorId.avatar }
            : { name: "BoldMind Team" },
          imageUrl: post.imageUrl || "/placeholder.svg",
          slug: post.slug,
          views: post.views || 0,
          createdAt: post.createdAt.toISOString(),
          source: post.source || "manual",
          commentary: post.commentary,
          isSponsored: post.isSponsored || false,
          boldmindProduct: post.boldmindProduct || "amebogist",
        }))
        .filter((post) => post.title && post.excerpt),
      total,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], total: 0 };
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category } = await searchParams;
  const categories = await fetchCategories();
  let title = {
    default: "AmeboGist.ng - Nigeria's #1 Gist, AI, Tech, Politics & Entertainment Hub",
    template: "%s | AmeboGist.ng - BoldMind Ecosystem",
  };
  let description =
    "Amebo wey make sense! Part of BoldMind Ecosystem - Nigeria's premier source for authentic gist, breaking politics, trending entertainment, game-changing AI & Tech insights, and real-life hustle tips.";
  let keywords = [
    "AmeboGist",
    "Naija gist",
    "AI tech Nigeria",
    "trending amebo",
    "Nigerian politics",
    "entertainment news",
    "creator life",
    "BoldMind",
    "BoldMind Ecosystem",
    "African entrepreneurs",
    ...(category ? [categories.find((c) => c.slug === category)?.name.toLowerCase() || "news"] : []),
  ];
  if (category) {
    const selectedCat = categories.find((cat) => cat.slug === category);
    if (selectedCat) {
      title = {
        default: selectedCat.metaTitle || `${selectedCat.name} News | AmeboGist.ng - BoldMind`,
        template: `%s | ${selectedCat.name} News | AmeboGist.ng - BoldMind`,
      };
      description = selectedCat.metaDescription || `Latest ${selectedCat.name.toLowerCase()} news from Nigeria's BoldMind Ecosystem.`;
      keywords = [...keywords, `${selectedCat.name.toLowerCase()} amebo`, "AI insights", "entrepreneurship"];
    }
  }
  return {
    metadataBase: new URL("https://amebogist.ng"),
    title,
    description,
    openGraph: {
      title: title.default,
      description,
      url: `https://amebogist.ng${category ? `?category=${category}` : ""}`,
      images: ["/og-image.jpg"],
      siteName: "AmeboGist - BoldMind Ecosystem",
      type: "website",
    },
    twitter: {
      title: title.default,
      description,
      images: ["/og-image.jpg"],
      card: "summary_large_image",
      site: "@boldmindtech",
    },
    alternates: {
      canonical: `https://amebogist.ng${category ? `?category=${category}` : ""}`,
    },
    keywords,
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const truncateToWords = (text: string | undefined, maxWords = 30) => {
  if (!text) return text;
  const words = text.trim().split(/\s+/);
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page } = await searchParams;
  const pageNum = Number.parseInt(page || "1", 10);
  const limit = 9;
  const skip = (pageNum - 1) * limit;
  const selectedCategory = category || "";
  const [categories, { posts, total }, trendingPosts] = await Promise.all([
    fetchCategories(),
    fetchPosts({ limit, skip, category: selectedCategory }),
    getTrendingPosts(8),
  ]);
  const heroPost = posts[0];
  const currentUrl = `https://amebogist.ng${selectedCategory ? `?category=${selectedCategory}` : ""}`;

  // BoldMind Ecosystem products for promotion
  const ecosystemProducts = [
    {
      id: 'boldmind-hub',
      name: 'BoldMind Hub',
      description: 'Your main dashboard for all BoldMind products',
      category: 'ecosystem',
      icon: '🚀',
      url: 'https://boldmind.ng',
    },
    {
      id: 'educenter',
      name: 'EduCenter',
      description: 'JAMB/WAEC prep & career development',
      category: 'education',
      icon: '🎓',
      url: 'https://educenter.com.ng',
    },
    {
      id: 'naija-fither',
      name: 'Naija FitHer',
      description: 'Weight loss platform for Nigerian women',
      category: 'health',
      icon: '💪',
      url: 'https://fit.boldmind.ng',
    },
    {
      id: 'planai-suite',
      name: 'PlanAI Suite',
      description: 'AI-powered business tools for entrepreneurs',
      category: 'ai',
      icon: '🤖',
      url: 'https://planai.boldmind.ng',
    },
  ];

  return (
    <>
      <style jsx global>{`
        :root {
          --amebo-primary: ${ameboColors.primary};
          --amebo-secondary: ${ameboColors.secondary};
          --amebo-accent: ${ameboColors.accent};
          --amebo-success: ${ameboColors.success};
          --amebo-warning: ${ameboColors.warning};
          --amebo-error: ${ameboColors.error};
          --gradient-amebo: linear-gradient(135deg, ${ameboColors.gradients.primary[0]}, ${ameboColors.gradients.primary[1]});
        }
        
        .bg-amebo-gradient {
          background: linear-gradient(135deg, ${ameboColors.primary}20, ${ameboColors.secondary}20);
        }
        
        .border-amebo {
          border-color: ${ameboColors.primary}30;
        }
        
        .text-amebo-primary {
          color: ${ameboColors.primary};
        }
        
        .hover-bg-amebo:hover {
          background-color: ${ameboColors.primary}10;
        }
      `}</style>
      
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": currentUrl,
            name: selectedCategory
              ? `${categories.find((c) => c.slug === selectedCategory)?.name} News | AmeboGist.ng - BoldMind Ecosystem`
              : "Amebo Wey Make Sense! - Latest Nigerian Amebo",
            description: selectedCategory
              ? `${categories.find((c) => c.slug === selectedCategory)?.metaDescription || "Latest amebo and news from Nigeria's BoldMind Ecosystem"}`
              : "Nigeria's top source for trending amebo, politics, entertainment, AI & tech, and creator life. Part of the BoldMind Ecosystem.",
            url: currentUrl,
            publisher: {
              "@type": "Organization",
              name: "BoldMind Technology Solutions",
              url: "https://boldmind.ng",
              logo: { "@type": "ImageObject", url: "https://boldmind.ng/logo.png" },
            },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: posts.length,
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "NewsArticle",
                  "@id": `https://amebogist.ng/posts/${post.slug}`,
                  headline: post.title,
                  description: post.excerpt,
                  image: post.imageUrl,
                  datePublished: post.createdAt,
                  author: { "@type": "Person", name: post.author.name },
                  publisher: {
                    "@type": "Organization",
                    name: "AmeboGist - BoldMind Ecosystem",
                    logo: { "@type": "ImageObject", url: "https://amebogist.ng/logo.png" },
                  },
                },
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://amebogist.ng" },
                ...(selectedCategory
                  ? [
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory,
                        item: currentUrl,
                      },
                    ]
                  : []),
              ],
            },
          }),
        }}
      />
      
      <div className="container mx-auto px-4 py-8" data-product="amebogist">
        {/* BoldMind Ecosystem Header */}
        <div className="flex items-center justify-between mb-8 p-4 rounded-lg bg-amebo-gradient border border-amebo">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white shadow-md">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Part of the BoldMind Ecosystem</h1>
              <p className="text-sm text-muted-foreground">Connecting 31+ products for Nigerian entrepreneurs</p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-amebo text-amebo-primary hover-bg-amebo">
            <Link href="https://boldmind.ng">
              Explore Ecosystem →
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="mb-12 relative">
          <div className="relative rounded-xl overflow-hidden h-[500px] mb-6">
            <Image
              src={heroPost?.imageUrl || "/placeholder.svg"}
              alt={heroPost?.title || "Featured Nigerian News Story"}
              width={1200}
              height={500}
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2w..."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <EcosystemBadge product="amebogist" variant="breaking">🔥 BREAKING</EcosystemBadge>
                <Badge variant="secondary" className="bg-amebo-primary text-white">
                  {heroPost?.category.name || "Top Story"}
                </Badge>
                {heroPost?.source === "newsdata" && (
                  <Badge variant="outline" className="border-white text-white">Live Update</Badge>
                )}
                {heroPost?.isSponsored && (
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500">Sponsored</Badge>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                {heroPost?.title || "Latest Amebo Wey Make Sense!"}
              </h1>
              <p className="text-white/90 mb-6 max-w-3xl text-lg font-serif leading-relaxed">
                {truncateToWords(heroPost?.excerpt || heroPost?.commentary) ||
                  "Stay updated with Nigeria's freshest gist..."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button asChild className="bg-amebo-primary hover:bg-amebo-accent text-white text-lg px-8 py-3">
                  <Link href={heroPost?.slug ? `/posts/${heroPost.slug}` : "#"}>Read Full Story →</Link>
                </Button>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{heroPost?.views?.toLocaleString() || "0"} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">
                      {heroPost?.createdAt
                        ? new Date(heroPost.createdAt).toLocaleDateString("en-NG", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Just now"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <ShareButtons
                  url={`https://amebogist.ng/posts/${heroPost?.slug}`}
                  title={heroPost?.title || "Check out this amebo from AmeboGist!"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Promotion Banner */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">🚀 Powered by BoldMind Ecosystem</h3>
                <p className="text-gray-300">
                  AmeboGist is one of 31+ products in our ecosystem empowering Nigerian entrepreneurs. 
                  Discover tools for education, health, business, and more!
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="https://boldmind.ng/products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="https://boldmind.ng/about">Our Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-amebo-gradient rounded-xl p-8 border border-amebo">
              <h2 className="text-3xl font-bold mb-6 font-serif text-center text-amebo-primary">🔍 Find Your Next Amebo</h2>
              <SearchBar showTrending={true} />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Popular searches:</span>
                {["Tinubu", "Afrobeats", "AI Tools", "Nollywood", "Elections", "Entrepreneurship"].map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${term}`}
                    className="text-sm bg-amebo-primary/10 hover:bg-amebo-primary/20 px-3 py-1 rounded-full transition-colors text-amebo-primary"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Ecosystem Products Mini Showcase */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-amebo-primary" />
                <h3 className="font-bold text-xl font-serif">🎯 BoldMind Ecosystem Products</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ecosystemProducts.map((product) => (
                  <Link 
                    key={product.id}
                    href={product.url}
                    className="p-4 rounded-lg border border-gray-200 hover:border-amebo-primary hover:bg-amebo-primary/5 transition-all group"
                  >
                    <div className="text-2xl mb-2">{product.icon}</div>
                    <h4 className="font-semibold group-hover:text-amebo-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-gray-50 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-amebo-primary animate-pulse" />
                  <h3 className="font-bold text-xl font-serif">🔥 Trending Now</h3>
                </div>
                <TrendingCarousel topics={categories} posts={trendingPosts} />
              </CardContent>
            </Card>
            
            <Card className="bg-amebo-gradient border border-amebo">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg font-serif mb-3 text-white">📧 Daily Amebo Alert</h3>
                <p className="text-sm text-white/90 mb-4">
                  Get the hottest Nigerian gist with AI insights delivered daily! Plus updates from across the BoldMind Ecosystem.
                </p>
                <NewsletterForm 
                  compact={true}
                  product="amebogist"
                  tags={["naija-gist", "ai-tech", "entrepreneurship"]}
                />
              </CardContent>
            </Card>
            
            {/* Ecosystem Stats */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg font-serif mb-4">📊 BoldMind Ecosystem Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-amebo-primary" />
                      <span className="text-sm">AI Products</span>
                    </div>
                    <span className="font-semibold">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-amebo-primary" />
                      <span className="text-sm">Active Users</span>
                    </div>
                    <span className="font-semibold">12,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amebo-primary" />
                      <span className="text-sm">Products Live</span>
                    </div>
                    <span className="font-semibold">4</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest Stories Section */}
        <section className="mb-12 p-8 rounded-xl bg-amebo-gradient/20 border border-amebo">
          <Tabs defaultValue={selectedCategory || "all"}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold font-serif text-amebo-primary">📰 Latest Amebo Stories</h2>
                <p className="text-sm text-muted-foreground mt-1">From AmeboGist - Part of BoldMind Ecosystem</p>
              </div>
              <div className="text-sm text-muted-foreground">
                Updated every 5 minutes • {total.toLocaleString()} total stories
              </div>
            </div>
            <TabsList className="mb-8 bg-white/50 p-2 rounded-lg flex-wrap h-auto border border-gray-200">
              <TabsTrigger value="all" asChild className="mb-2">
                <Link
                  href="?category="
                  className="font-serif data-[state=active]:bg-amebo-primary data-[state=active]:text-white px-4 py-2 rounded-md"
                >
                  🏠 All Stories
                </Link>
              </TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat._id} value={cat.slug} asChild className="mb-2">
                  <Link
                    href={`?category=${cat.slug}`}
                    className="font-serif data-[state=active]:bg-amebo-primary data-[state=active]:text-white px-4 py-2 rounded-md"
                  >
                    {cat.name}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={selectedCategory || "all"} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Card
                    key={post._id}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-amebo-primary"
                  >
                    <Link href={`/posts/${post.slug}`}>
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/2w..."
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                        <div className="absolute top-3 left-3">
                          <EcosystemBadge 
                            product={post.boldmindProduct || "amebogist"} 
                            size="sm"
                          >
                            {post.boldmindProduct === "amebogist" ? "Amebo" : post.boldmindProduct}
                          </EcosystemBadge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="pt-6 pb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="font-serif bg-amebo-primary/10 text-amebo-primary hover:bg-amebo-primary hover:text-white">
                            {post.category.name}
                          </Badge>
                          {post.source === "newsdata" && (
                            <Badge variant="secondary" className="font-serif animate-pulse bg-red-500 text-white">🔴 Live</Badge>
                          )}
                          {post.isSponsored && (
                            <Badge variant="outline" className="font-serif border-yellow-500 text-yellow-500">💰 Sponsored</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-serif line-clamp-2 group-hover:text-amebo-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 font-serif line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center border-t pt-4 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground font-serif">
                            By {post.author.name}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground font-serif">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {new Date(post.createdAt).toLocaleDateString("en-NG", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </CardFooter>
                    </Link>
                  </Card>
                ))}
              </div>
              {skip + limit < total && (
                <div className="flex flex-col items-center gap-4 mt-12">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">
                      Showing {skip + posts.length} of {total.toLocaleString()} stories
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                      <div
                        className="bg-amebo-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((skip + posts.length) / total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Button asChild className="bg-amebo-primary hover:bg-amebo-accent text-white font-serif text-lg px-8 py-3">
                    <Link href={`?category=${selectedCategory}&page=${pageNum + 1}`}>
                      Load More Stories ({(total - (skip + limit)).toLocaleString()} remaining) →
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* BoldMind Ecosystem CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">🚀 Join the BoldMind Revolution</h3>
              <p className="text-xl mb-8 text-gray-300">
                AmeboGist is just one piece of our ecosystem. We're building 31+ products to empower 
                1 million Nigerian entrepreneurs by 2030.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="font-bold text-lg mb-2">Solve Real Problems</h4>
                  <p className="text-sm text-gray-300">Products built specifically for Nigerian challenges</p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-4">🤖</div>
                  <h4 className="font-bold text-lg mb-2">AI-Powered Tools</h4>
                  <p className="text-sm text-gray-300">Cutting-edge technology for African entrepreneurs</p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-4">🌍</div>
                  <h4 className="font-bold text-lg mb-2">Made for Nigeria</h4>
                  <p className="text-sm text-gray-300">Cultural context and local relevance built-in</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="https://boldmind.ng">Explore BoldMind Hub</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="https://boldmind.ng/products">See All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="mb-12 p-8 rounded-xl bg-amebo-gradient/20 border border-amebo">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold font-serif text-amebo-primary">🏆 Most Popular This Week</h2>
          </div>
          <PopularPosts />
        </section>

        {/* Newsletter Signup */}
        <section
          className="rounded-2xl p-8 mb-8 bg-gradient-to-r from-amebo-primary/10 to-amebo-secondary/10 border border-amebo animate-slide-up"
          role="complementary"
          aria-label="Newsletter signup section"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">📱 Join the Hottest AI, Tech & Naija Gist!</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 font-serif leading-relaxed">
              🇳🇬 Amebo wey make sense. Gist wey fit change your level! Join{" "}
              <strong>50,000+ Nigerians</strong> for daily AI, tech, and trending gist from Lagos to
              Abuja. Plus exclusive updates from the entire BoldMind Ecosystem.
            </p>
            <div className="mb-6">
              <NewsletterForm 
                product="amebogist"
                tags={["naija-gist", "ai-tech", "boldmind-ecosystem", "entrepreneurship"]}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <Check className="h-4 w-4 text-amebo-primary" aria-hidden="true" />
                <span>Daily AI & Tech Gist</span>
              </div>
              <div className="flex items-center justify-center gap-2 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <Check className="h-4 w-4 text-amebo-primary" aria-hidden="true" />
                <span>Breaking News Alerts</span>
              </div>
              <div className="flex items-center justify-center gap-2 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <Check className="h-4 w-4 text-amebo-primary" aria-hidden="true" />
                <span>Ecosystem Product Updates</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-serif">
              🔒 Your email safe pass Lagos vault. No spam, comot anytime.
            </p>
          </div>
        </section>

        {/* Footer Ecosystem Links */}
        <section className="mb-8">
          <div className="border-t pt-8">
            <h4 className="text-lg font-semibold mb-4 text-center">Explore the BoldMind Ecosystem</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "EduCenter", url: "https://educenter.com.ng", category: "Education" },
                { name: "Naija FitHer", url: "https://fit.boldmind.ng", category: "Health" },
                { name: "PlanAI Suite", url: "https://planai.boldmind.ng", category: "AI Tools" },
                { name: "BoldMind OS", url: "https://os.boldmind.ng", category: "Productivity" },
                { name: "EmailScraper", url: "https://email.boldmind.ng", category: "Lead Gen" },
                { name: "Safe AI", url: "https://safe.boldmind.ng", category: "Security" },
              ].map((product) => (
                <Link
                  key={product.name}
                  href={product.url}
                  className="p-3 rounded-lg border border-gray-200 hover:border-amebo-primary hover:bg-amebo-primary/5 transition-all text-center"
                >
                  <div className="font-medium text-sm">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}