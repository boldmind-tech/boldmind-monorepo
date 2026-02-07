import Link from "next/link";
import { Brain, Zap, Users, Target, TrendingUp, Mail, Sparkles, ChevronRight } from "lucide-react";

import { Button } from "../components/ui/button";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";

import { amebogistAPI } from "../lib/api";

// Components
import SearchBar from "../components/SearchBar";
import NewsletterForm from "../components/NewsletterForm";
import PostCard from "../components/PostCard";
import TrendingCarousel from "../components/TrendingCarousel";
import PopularPosts from "../components/PopularPosts";
import AdBanner from "../components/AdBanner";

// Types
import type { AmebogistCategory } from "../types/index";

export const revalidate = 60;

// Fetch categories from API
async function fetchCategories(): Promise<AmebogistCategory[]> {
  try {
    const response = await amebogistAPI.getCategories();
    return response.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch posts from API
async function fetchPosts(params: any = {}) {
  try {
    const response = await amebogistAPI.articles.list(params);
    const articles = response.data || [];
    const total = response.meta?.total || articles.length;

    return {
      posts: articles.map((post) => ({
        _id: post._id,
        title: post.title,
        excerpt: post.excerpt || (typeof post.content === 'string' ? post.content.substring(0, 160) : post.content.pidgin.substring(0, 160)) + "...",
        category: typeof post.category === 'string'
          ? { name: post.category, slug: post.category.toLowerCase() }
          : post.category,
        author: post.author,
        imageUrl: post.imageUrl || "/placeholder.svg",
        slug: post.slug,
        views: post.views || post.engagement?.views || 0,
        createdAt: post.createdAt,
        source: "api",
        isSponsored: false,
        boldmindProduct: "amebogist",
      })),
      total,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], total: 0 };
  }
}

// Generate metadata
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
    ...(category
      ? [categories.find((c) => c.slug === category)?.name.toLowerCase() || "news"]
      : []),
  ];

  if (category) {
    const selectedCat = categories.find((cat) => cat.slug === category);
    if (selectedCat) {
      title = {
        default:
          selectedCat.metaTitle ||
          `${selectedCat.name} News | AmeboGist.ng - BoldMind`,
        template: `%s | ${selectedCat.name} News | AmeboGist.ng - BoldMind`,
      };
      description =
        selectedCat.metaDescription ||
        `Latest ${selectedCat.name.toLowerCase()} news from Nigeria's BoldMind Ecosystem.`;
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
      url: `https://amebogist.ng${category ? `/category/${category}` : ""}`,
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
      canonical: `https://amebogist.ng${category ? `/category/${category}` : ""}`,
    },
    keywords,
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Main Home Component
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

  // Fetch all data
  const [categories, postsData, trendingPostsRes] = await Promise.all([
    fetchCategories(),
    fetchPosts({ limit, skip, category: selectedCategory }),
    amebogistAPI.articles.getTrending(8),
  ]);

  const { posts, total } = postsData;
  const trendingPosts = (trendingPostsRes.data || []).map((p: any) => ({
    ...p,
    category: typeof p.category === 'string'
      ? { name: p.category, slug: p.category.toLowerCase() }
      : p.category
  }));

  const heroPost = posts[0];
  const currentUrl = `https://amebogist.ng${selectedCategory ? `/category/${selectedCategory}` : ""}`;

  // BoldMind Ecosystem Products
  const ecosystemProducts = [
    {
      id: "boldmind-hub",
      name: "BoldMind Hub",
      description: "Main dashboard for all products",
      category: "ecosystem",
      icon: "🚀",
      url: "https://boldmind.ng",
    },
    {
      id: "educenter",
      name: "EduCenter",
      description: "JAMB/WAEC prep tools",
      category: "education",
      icon: "🎓",
      url: "https://educenter.com.ng",
    },
    {
      id: "naija-fither",
      name: "Naija FitHer",
      description: "Weight loss for women",
      category: "health",
      icon: "💪",
      url: "https://fit.boldmind.ng",
    },
    {
      id: "planai-suite",
      name: "PlanAI Suite",
      description: "AI-powered business tools",
      category: "ai",
      icon: "🤖",
      url: "https://planai.boldmind.ng",
    },
  ];

  // Navigation configuration
  const navLinks = [
    { href: "/", label: "Home" },
    ...categories.map((cat) => ({
      href: `/category/${cat.slug}`,
      label: cat.name,
    })),
  ];

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { href: "/", label: "Home" },
        ...categories.map((cat) => ({
          href: `/category/${cat.slug}`,
          label: cat.name,
        })),
      ],
    },
    {
      title: "BoldMind Ecosystem",
      links: ecosystemProducts.map((p) => ({
        href: p.url,
        label: p.name,
        isExternal: true,
      })),
    },
    {
      title: "Support",
      links: [
        { href: "mailto:hello@boldmind.ng", label: "Email Us" },
        { href: "https://wa.me/2349138349271", label: "WhatsApp Support", isExternal: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SuperNavbar
        links={navLinks}
        cta={{
          href: "https://boldmind.ng",
          label: "Explore Ecosystem",
          variant: "secondary",
        }}
        logoSrc="/logo.png"
        sticky={true}
        animated={true}
        showThemeControls={true}
      />

      {/* Schema Markup */}
      <script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": currentUrl,
            name: selectedCategory
              ? `${categories.find((c) => c.slug === selectedCategory)?.name} News | AmeboGist.ng`
              : "Amebo Wey Make Sense! - Latest Nigerian News",
            url: currentUrl,
            publisher: {
              "@type": "Organization",
              name: "BoldMind Technology Solutions",
              url: "https://boldmind.ng",
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl pt-24">
        {/* Modern Ecosystem Intro */}
        <div className="relative mb-16 overflow-hidden rounded-[2.5rem] bg-ecosystem-blue p-8 md:p-14 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amebogreen-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amebogreen-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Part of BoldMind Ecosystem</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif tracking-tight leading-[1.05]">
                Amebo Wey <span className="text-amebogreen-400 underline decoration-amebogreen-500 decoration-8 underline-offset-8">Make Sense</span>!
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-medium max-w-xl leading-relaxed font-serif">
                Connect wit fresh gist, breaking politics, and real-life hustle tips across <span className="text-ecosystem-gold font-bold">Nigeria's #1 Ecosystem</span>.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[280px]">
              <Button asChild size="lg" className="bg-amebogreen-600 hover:bg-amebogreen-700 text-white border-none shadow-xl shadow-amebogreen-900/40 py-8 text-lg font-black group rounded-2xl">
                <Link href="/create">
                  Share Your Amebo
                  <Sparkles className="ml-2 h-5 w-5 fill-white group-hover:scale-125 transition-transform" />
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-white/40">
                <div className="h-px w-8 bg-current" />
                <span className="text-[10px] font-black tracking-widest uppercase">Trusted by 12k+ Hustlers</span>
                <div className="h-px w-8 bg-current" />
              </div>
            </div>
          </div>
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-amebogreen-500/20 to-transparent blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amebogreen-600/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Dynamic Hero Section */}
        {heroPost && (
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:min-h-[650px]">
              {/* Featured Post */}
              <div className="lg:col-span-8 h-full">
                <PostCard post={heroPost} featured={true} />
              </div>

              {/* Trending Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                <div className="bg-white rounded-[2.5rem] p-8 flex-1 flex flex-col border border-gray-100 shadow-premium overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-serif flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-amebogreen-600" />
                      Hot Gist
                    </h3>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <TrendingCarousel topics={[]} posts={trendingPosts} />
                  </div>
                </div>

                {/* Newsletter Minimalist Card */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 font-serif">No Gree For Boredom!</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">Get Nigeria's freshest gist directly in your box everyday.</p>
                    <NewsletterForm compact={true} product="amebogist" />
                  </div>
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                    <Mail className="h-40 w-40" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <AdBanner />

        {/* Search Experience */}
        <section className="mb-24">
          <div className="bg-amebogreen-50/30 rounded-[3rem] p-10 md:p-20 border border-amebogreen-100/50 flex flex-col items-center text-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 leading-tight">
                Find Your Next <span className="text-amebogreen-600 italic">Favorite Gist</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-serif">Search across thousands of stories in politics, tech, and entertainment.</p>
              <div className="w-full">
                <SearchBar showTrending={true} />
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {["Tinubu", "Afrobeats", "AI Tools", "Nollywood", "Elections"].map(
                  (term) => (
                    <Link
                      key={term}
                      href={`/search?q=${term}`}
                      className="text-xs font-black bg-white hover:bg-amebogreen-600 hover:text-white px-5 py-2.5 rounded-full transition-all border border-gray-100 shadow-sm uppercase tracking-widest"
                    >
                      #{term}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl opacity-50" />
          </div>
        </section>

        {/* Latest Gists with Premium Cards */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10 mb-12">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-3 tracking-tight">Latest Amebo <span className="text-amebogreen-600">Stories</span></h2>
              <p className="text-muted-foreground text-lg font-serif italic">Fresh from de source, served hot hot.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/category/trending"
                className="px-6 py-2.5 rounded-full bg-amebogreen-50 text-amebogreen-700 font-black text-[10px] uppercase tracking-widest hover:bg-amebogreen-100 transition-colors border border-amebogreen-100"
              >
                🔥 Trending
              </Link>
              <Link
                href="/category/politics"
                className="px-6 py-2.5 rounded-full bg-blue-50 text-blue-700 font-black text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-colors border border-blue-100"
              >
                🏛️ Politics
              </Link>
              <Link
                href="/category/entertainment"
                className="px-6 py-2.5 rounded-full bg-purple-50 text-purple-700 font-black text-[10px] uppercase tracking-widest hover:bg-purple-100 transition-colors border border-purple-100"
              >
                🎬 Entertainment
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content: Latest Posts */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {posts.slice(1).map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>

              {skip + limit < total && (
                <div className="mt-20 flex justify-center">
                  <Button asChild variant="outline" size="lg" className="rounded-full px-16 py-8 border-gray-200 text-gray-900 hover:bg-gray-50 font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-premium border-2">
                    <Link href={`?category=${selectedCategory}&page=${pageNum + 1}`}>
                      View More Stories
                    </Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar: Popular Posts & More */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100">
                <h3 className="text-xl font-bold font-serif mb-8 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amebogreen-600" />
                  Popular Today
                </h3>
                <PopularPosts />
              </div>

              <div className="bg-amebogreen-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 font-serif italic">Join 12k+ Creators</h3>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed">Don't miss out on the latest tech and AI insights from the BoldMind Ecosystem.</p>
                  <Button asChild variant="secondary" className="w-full rounded-xl bg-white text-amebogreen-600 hover:bg-gray-100 border-none font-bold">
                    <Link href="https://boldmind.ng/register">Join Community</Link>
                  </Button>
                </div>
                <Users className="absolute -right-8 -bottom-8 h-48 w-48 text-white/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </aside>
          </div>
        </section>

        {/* Premium Products & Stats */}
        <section className="relative mt-12 mb-24 overflow-hidden rounded-[3.5rem] bg-slate-900 p-8 md:p-16 text-white shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amebogreen-500/10 border border-amebogreen-500/20 mb-8">
                <Zap className="h-4 w-4 text-ecosystem-gold fill-ecosystem-gold" />
                <span className="text-[10px] font-black tracking-widest uppercase">The BoldMind Network</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
                Empowering Nigeria's <br />
                <span className="text-amebogreen-400">Digital Future</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ecosystemProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.url}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-amebogreen-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{product.icon}</span>
                      <div>
                        <h4 className="font-bold group-hover:text-amebogreen-400 transition-colors uppercase text-[10px] tracking-widest">{product.name}</h4>
                        <p className="text-[10px] text-white/40 line-clamp-1 italic">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12">
                <Button asChild variant="link" className="text-amebogreen-400 font-black uppercase tracking-widest text-xs p-0 gap-2 h-auto hover:no-underline hover:text-amebogreen-300">
                  <Link href="https://boldmind.ng/products">Explore all 31+ Products <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-14">
              <p className="text-xs text-amebogreen-400 font-black uppercase tracking-[0.25em] mb-12 text-center">Global Impact Ecosystem</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-amebogreen-500/20 flex items-center justify-center border border-amebogreen-500/30">
                    <Brain className="h-6 w-6 text-amebogreen-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-black">18+</p>
                    <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">AI Tools</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-amebogreen-500/20 flex items-center justify-center border border-amebogreen-500/30">
                    <Users className="h-6 w-6 text-amebogreen-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-black">12.5k</p>
                    <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Hustlers</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-amebogreen-500/20 flex items-center justify-center border border-amebogreen-500/30">
                    <Target className="h-6 w-6 text-amebogreen-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-black">31+</p>
                    <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Live Apps</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 text-center">
                <p className="text-[10px] text-white/30 leading-relaxed uppercase font-bold tracking-[0.2em]">
                  Mission: Digital Sovereignty for Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.05),transparent_50%)]" />
        </section>
      </div>

      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: 'hello@boldmind.ng',
          phone: '+2349138349271',
          whatsapp: '+2349138349271',
          address: 'No 5 Olusoji imole str ikosi ketu Lagos Nigeria',
        }}
        copyright={`© ${new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.`}
      />
    </div>
  );
}