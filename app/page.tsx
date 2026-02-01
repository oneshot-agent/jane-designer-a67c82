import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>OneShot Template</CardTitle>
          <CardDescription>
            This page will be replaced by your generated content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}
