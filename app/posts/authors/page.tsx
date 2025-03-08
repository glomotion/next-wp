import BackButton from "@/components/back";
import { Container, Prose, Section } from "@/components/craft";
import { getAllAuthors } from "@/lib/wordpress";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "All Authors",
	description: "Browse all authors of our blog posts",
	alternates: {
		canonical: "/posts/authors",
	},
};

export default async function Page() {
	const authors = await getAllAuthors();

	return (
		<Section>
			<Container className="space-y-6">
				<Prose className="mb-8">
					<h2>All Authors</h2>
					<ul className="grid">
						{authors.map((author) => (
							<li key={author.id}>
								<Link href={`/posts/?author=${author.id}`}>{author.name}</Link>
							</li>
						))}
					</ul>
				</Prose>
				<BackButton />
			</Container>
		</Section>
	);
}
