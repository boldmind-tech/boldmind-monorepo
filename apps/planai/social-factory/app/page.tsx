'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boldmind/ui/components/Card';
import { Button } from '@boldmind/ui/components/Button';
import { Input } from '@boldmind/ui/components/Input';
import { Textarea } from '@boldmind/ui/components/Textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@boldmind/ui/components/Tabs';
import { useAI } from '@boldmind/ai';
import { toast } from 'react-hot-toast';

export default function SocialFactoryPage() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [tone, setTone] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  
  const { generateContent } = useAI();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic');
      return;
    }

    setLoading(true);
    try {
      const result = await generateContent({
        prompt: `Generate ${platform} content about ${topic} with ${tone} tone`,
        type: 'social-media',
        platform,
      });
      setContent(result.content);
      toast.success('Content generated successfully!');
    } catch (error) {
      toast.error('Failed to generate content');
    } finally {
      setLoading(false);
    }
  };

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'twitter', name: 'Twitter', icon: '🐦' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { id: 'facebook', name: 'Facebook', icon: '👥' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
  ];

  const tones = [
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
    { id: 'funny', name: 'Funny' },
    { id: 'inspirational', name: 'Inspirational' },
    { id: 'educational', name: 'Educational' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Social Media Content Factory
          </h1>
          <p className="text-gray-600">
            Generate, schedule, and publish content across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Input */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Content Generator</CardTitle>
              <CardDescription>
                Create amazing content in seconds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>
                <Input
                  placeholder="What's your content about?"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Platform</label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((p) => (
                    <Button
                      key={p.id}
                      variant={platform === p.id ? 'default' : 'outline'}
                      onClick={() => setPlatform(p.id)}
                      className="flex items-center gap-2"
                    >
                      <span>{p.icon}</span>
                      {p.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tone</label>
                <div className="flex flex-wrap gap-2">
                  {tones.map((t) => (
                    <Button
                      key={t.id}
                      variant={tone === t.id ? 'default' : 'outline'}
                      onClick={() => setTone(t.id)}
                    >
                      {t.name}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? 'Generating...' : 'Generate Content'}
              </Button>
            </CardContent>
          </Card>

          {/* Right Panel - Output & Features */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generated Content</CardTitle>
              </CardHeader>
              <CardContent>
                {content ? (
                  <div className="space-y-4">
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[200px]"
                    />
                    <div className="flex gap-2">
                      <Button variant="outline">Copy</Button>
                      <Button variant="outline">Save Draft</Button>
                      <Button>Schedule Post</Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-6xl mb-4">✨</div>
                    <p>Your content will appear here</p>
                    <p className="text-sm">Enter a topic and click generate</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Tabs defaultValue="calendar">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8 text-gray-500">
                      Content calendar coming soon...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8 text-gray-500">
                      Analytics dashboard coming soon...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="automation">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8 text-gray-500">
                      Automation workflows coming soon...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}