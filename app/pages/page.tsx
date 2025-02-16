import { getAllPages } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import type { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all pages of our blog posts",
  alternates: {
    canonical: "/posts/pages",
  },
};

export const revalidate = 30;

export default async function Page() {
  const pages = await getAllPages();

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Pages</h2>
          <ul className="grid">
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {pages.map((page: any) => (
              <li key={page.id}>
                <Link href={`/pages/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
