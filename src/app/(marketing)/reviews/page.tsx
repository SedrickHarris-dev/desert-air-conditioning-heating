import { PageHeader } from "@/components/templates/PageHeader";
import { ReviewSection } from "@/components/blocks/ReviewSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description: "Customer reviews for Las Vegas Pro Plumbing.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader title="Customer Reviews" />
      <ReviewSection />
    </>
  );
}
