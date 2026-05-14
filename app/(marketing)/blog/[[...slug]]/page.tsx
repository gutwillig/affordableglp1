import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";

// Placeholder blog posts
const blogPosts = [
  {
    slug: "semaglutide-vs-tirzepatide",
    title: "Semaglutide vs Tirzepatide: Which GLP-1 is Right for You?",
    dek: "A comprehensive comparison of the two leading GLP-1 medications for weight loss, including effectiveness, side effects, and cost.",
    category: "comparisons",
    tags: ["semaglutide", "tirzepatide", "weight loss", "comparison"],
    author: { name: "Editorial Team" },
    publishedAt: "May 10, 2026",
    updatedAt: "May 10, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=630&fit=crop",
    content: `
      <p>If you're considering GLP-1 medications for weight loss, you've likely encountered two main options: semaglutide (brand names Wegovy and Ozempic) and tirzepatide (brand names Zepbound and Mounjaro). Both are highly effective, but they work slightly differently and have different profiles.</p>

      <h2>How They Work</h2>
      <p>Semaglutide is a GLP-1 receptor agonist, meaning it mimics the GLP-1 hormone that your body naturally produces. This hormone helps regulate blood sugar, slows gastric emptying, and reduces appetite.</p>
      <p>Tirzepatide is a dual GIP/GLP-1 receptor agonist, meaning it targets two hormones instead of one. This dual action may contribute to its potentially higher effectiveness in some studies.</p>

      <h2>Effectiveness</h2>
      <p>Clinical trials have shown impressive results for both medications:</p>
      <ul>
        <li><strong>Semaglutide (Wegovy):</strong> Average weight loss of about 15% of body weight over 68 weeks</li>
        <li><strong>Tirzepatide (Zepbound):</strong> Average weight loss of up to 20-22% of body weight over 72 weeks</li>
      </ul>

      <h2>Side Effects</h2>
      <p>Both medications share similar side effects, primarily gastrointestinal:</p>
      <ul>
        <li>Nausea</li>
        <li>Vomiting</li>
        <li>Diarrhea</li>
        <li>Constipation</li>
        <li>Stomach pain</li>
      </ul>
      <p>These side effects are typically most pronounced when starting the medication or increasing dosage, and often improve over time.</p>

      <h2>Cost Comparison</h2>
      <p>Without insurance, both medications are expensive at retail pharmacies (around $1,000-1,500/month). Through telehealth providers offering compounded versions, costs can be significantly lower:</p>
      <ul>
        <li><strong>Compounded semaglutide:</strong> $149-299/month</li>
        <li><strong>Compounded tirzepatide:</strong> $199-399/month</li>
      </ul>

      <h2>The Verdict</h2>
      <p>Both semaglutide and tirzepatide are highly effective for weight loss. Tirzepatide may offer slightly better results in some cases, but semaglutide has a longer track record and is more widely available. The best choice depends on your individual health situation, budget, and provider availability.</p>
    `,
  },
  {
    slug: "understanding-glp1-side-effects",
    title: "Understanding GLP-1 Side Effects: What to Expect",
    dek: "A detailed guide to common and rare side effects of semaglutide and tirzepatide, plus tips for managing them.",
    category: "side-effects",
    tags: ["side effects", "semaglutide", "tirzepatide", "tips"],
    author: { name: "Editorial Team" },
    publishedAt: "May 8, 2026",
    updatedAt: "May 8, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop",
    content: `
      <p>GLP-1 medications are generally well-tolerated, but like all medications, they can cause side effects. Understanding what to expect can help you prepare and know when to seek medical attention.</p>

      <h2>Common Side Effects</h2>
      <p>The most common side effects are gastrointestinal and affect 30-50% of users:</p>
      <ul>
        <li><strong>Nausea:</strong> The most common side effect, usually worst in the first few weeks</li>
        <li><strong>Vomiting:</strong> May occur, especially with higher doses</li>
        <li><strong>Diarrhea:</strong> Often temporary as the body adjusts</li>
        <li><strong>Constipation:</strong> Some people experience the opposite</li>
        <li><strong>Abdominal pain:</strong> Usually mild and temporary</li>
      </ul>

      <h2>Tips for Managing Side Effects</h2>
      <p>Here are strategies that can help:</p>
      <ul>
        <li>Eat smaller, more frequent meals</li>
        <li>Avoid high-fat and greasy foods</li>
        <li>Stay well hydrated</li>
        <li>Eat slowly and stop when you feel full</li>
        <li>Avoid lying down immediately after eating</li>
      </ul>

      <h2>When to Contact Your Provider</h2>
      <p>Seek medical attention if you experience:</p>
      <ul>
        <li>Severe abdominal pain that doesn't go away</li>
        <li>Persistent vomiting</li>
        <li>Signs of an allergic reaction</li>
        <li>Vision changes</li>
        <li>Signs of low blood sugar if you have diabetes</li>
      </ul>
    `,
  },
  {
    slug: "how-to-save-money-glp1-medications",
    title: "How to Save Money on GLP-1 Medications in 2026",
    dek: "Practical strategies for getting affordable semaglutide and tirzepatide, from compounded options to patient assistance programs.",
    category: "cost-insurance",
    tags: ["cost", "savings", "compounded", "insurance"],
    author: { name: "Editorial Team" },
    publishedAt: "May 5, 2026",
    updatedAt: "May 5, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop",
    content: `
      <p>GLP-1 medications can be expensive, but there are several strategies to make them more affordable. Here's how to save money while getting effective treatment.</p>

      <h2>1. Consider Compounded Medications</h2>
      <p>During the FDA drug shortage, 503B compounding pharmacies can legally produce semaglutide and tirzepatide at a fraction of the retail price. Through telehealth providers, compounded GLP-1 medications typically cost $149-299/month compared to $1,000+ at retail pharmacies.</p>

      <h2>2. Compare Telehealth Providers</h2>
      <p>Prices vary significantly between providers. Some offer lower medication costs but charge for consultations, while others include everything in one price. Always compare the total Year 1 cost.</p>

      <h2>3. Check Insurance Coverage</h2>
      <p>Some insurance plans cover GLP-1 medications for weight loss, especially if you have obesity-related health conditions. Brand-name medications may be covered while compounded versions typically aren't.</p>

      <h2>4. Look for Patient Assistance Programs</h2>
      <p>Pharmaceutical manufacturers offer savings programs for eligible patients. Novo Nordisk (Wegovy) and Eli Lilly (Zepbound) both have patient assistance programs.</p>

      <h2>5. Consider Flexible Spending Accounts</h2>
      <p>If your employer offers an FSA or HSA, you may be able to use pre-tax dollars for GLP-1 medications, providing tax savings of 20-30%.</p>
    `,
  },
];

const categories = [
  { slug: "all", label: "All Posts" },
  { slug: "guides", label: "Guides" },
  { slug: "comparisons", label: "Comparisons" },
  { slug: "side-effects", label: "Side Effects" },
  { slug: "cost-insurance", label: "Cost & Insurance" },
  { slug: "news", label: "News" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return {
      title: "GLP-1 Blog | Weight Loss Medication Guides & News",
      description:
        "Expert articles on GLP-1 medications, weight loss strategies, side effects, and cost savings. Stay informed with the latest GLP-1 news.",
    };
  }

  const post = blogPosts.find((p) => p.slug === slug[0]);
  if (post) {
    return {
      title: post.title,
      description: post.dek,
    };
  }

  return { title: "Blog" };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // Single post view
  if (slug && slug.length > 0 && !slug[0].startsWith("category")) {
    const post = blogPosts.find((p) => p.slug === slug[0]);

    if (!post) {
      notFound();
    }

    return (
      <>
        {/* Post Header */}
        <article>
          <header className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-lg text-slate mb-6">{post.dek}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>By {post.author.name}</span>
                  <span>|</span>
                  <span>Published {post.publishedAt}</span>
                  {post.updatedAt !== post.publishedAt && (
                    <>
                      <span>|</span>
                      <span>Updated {post.updatedAt}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto px-4 -mt-4 mb-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
              {/* Article Body */}
              <div
                className="prose prose-slate prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Affiliate Disclosure */}
              <AffiliateDisclosure variant="full" className="mb-8" />

              {/* Related Posts */}
              <div className="border-t pt-8">
                <h2 className="font-display text-xl font-semibold text-midnight mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow h-full overflow-hidden">
                          <div className="relative aspect-video">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <Badge className="mb-2">{relatedPost.category}</Badge>
                            <h3 className="font-semibold text-midnight line-clamp-2">
                              {relatedPost.title}
                            </h3>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter */}
        <section className="py-12 bg-cloud/50">
          <div className="container mx-auto px-4">
            <Newsletter />
          </div>
        </section>
      </>
    );
  }

  // Category filter
  const categorySlug = slug?.[0] === "category" ? slug[1] : null;
  const filteredPosts = categorySlug
    ? blogPosts.filter((p) => p.category === categorySlug)
    : blogPosts;

  // Blog index
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              GLP-1 Blog
            </h1>
            <p className="text-lg text-slate">
              Expert guides, news, and insights on GLP-1 medications and weight
              loss.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Link key={category.slug} href={category.slug === "all" ? "/blog" : `/blog/category/${category.slug}`}>
                <Button
                  variant={(!categorySlug && category.slug === "all") || categorySlug === category.slug ? "default" : "outline"}
                  size="sm"
                  className={(!categorySlug && category.slug === "all") || categorySlug === category.slug ? "bg-forest hover:bg-forest-light" : ""}
                >
                  {category.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          {!categorySlug && filteredPosts[0] && (
            <Link href={`/blog/${filteredPosts[0].slug}`} className="block mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto md:min-h-[300px]">
                    <Image
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{filteredPosts[0].category}</Badge>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-midnight mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-slate mb-4">{filteredPosts[0].dek}</p>
                    <p className="text-sm text-muted-foreground">
                      {filteredPosts[0].publishedAt}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}

          {/* Rest of Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(categorySlug ? filteredPosts : filteredPosts.slice(1)).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3">{post.category}</Badge>
                    <h3 className="font-semibold text-midnight mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate line-clamp-2 mb-3">
                      {post.dek}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-cloud/50">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
