‎src/pages/Index.tsx
+13
-6
Lines changed: 13 additions & 6 deletions
Original file line number	Diff line number	Diff line change
@@ -1,12 +1,19 @@
// Update this page (the content is just a fallback if you fail to update the page)
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventCategories from "@/components/EventCategories";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EventCategories />
        <FeaturedHighlights />
      </main>
      <Footer />
    </div>
  );
};
