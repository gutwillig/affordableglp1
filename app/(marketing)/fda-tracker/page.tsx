import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";

export const metadata: Metadata = {
  title: "GLP-1 FDA Tracker | Regulatory Updates & Warning Letters",
  description:
    "Stay informed about GLP-1 medication FDA updates, warning letters, 503B compounding status, and regulatory changes affecting semaglutide and tirzepatide.",
};

// Placeholder FDA events
const fdaEvents = [
  {
    id: "1",
    title: "FDA Extends Semaglutide Shortage Designation",
    date: "May 10, 2026",
    type: "shortage",
    severity: "info",
    summary:
      "The FDA has extended the shortage designation for semaglutide injection products (Ozempic, Wegovy), allowing continued 503B compounding.",
    status: "active",
  },
  {
    id: "2",
    title: "Warning Letter to XYZ Compounding Pharmacy",
    date: "May 5, 2026",
    type: "warning-letter",
    severity: "warning",
    summary:
      "FDA issued a warning letter to XYZ Compounding for quality control violations in semaglutide compounding processes.",
    status: "active",
  },
  {
    id: "3",
    title: "Tirzepatide Added to FDA Shortage List",
    date: "April 28, 2026",
    type: "shortage",
    severity: "caution",
    summary:
      "Tirzepatide (Mounjaro, Zepbound) has been added to the FDA drug shortage list due to increased demand.",
    status: "active",
  },
  {
    id: "4",
    title: "503B Bulk Drug List Update",
    date: "April 15, 2026",
    type: "503b-update",
    severity: "info",
    summary:
      "FDA issued updated guidance on 503B bulk drug substances list, maintaining current status for GLP-1 active ingredients.",
    status: "resolved",
  },
];

const providerStanding = [
  { provider: "Hims/Hers", status: "Good Standing", pharmacy: "Partner 503B", notes: "No active FDA issues" },
  { provider: "Ro", status: "Good Standing", pharmacy: "Partner 503B", notes: "No active FDA issues" },
  { provider: "Henry Meds", status: "Good Standing", pharmacy: "Partner 503B", notes: "No active FDA issues" },
  { provider: "Eden", status: "Good Standing", pharmacy: "Partner 503B", notes: "No active FDA issues" },
  { provider: "Mochi Health", status: "Good Standing", pharmacy: "Partner 503B", notes: "No active FDA issues" },
];

function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical":
      return "bg-coral text-white";
    case "warning":
      return "bg-amber text-white";
    case "caution":
      return "bg-amber-light text-midnight";
    default:
      return "bg-sky-light text-midnight";
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case "shortage":
      return "Drug Shortage";
    case "warning-letter":
      return "Warning Letter";
    case "503b-update":
      return "503B Update";
    case "recall":
      return "Recall";
    case "approval":
      return "FDA Approval";
    default:
      return type;
  }
}

export default function FDATrackerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-midnight to-ink text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-amber-light uppercase tracking-wide mb-4">
              Regulatory Updates
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              GLP-1 FDA Tracker
            </h1>
            <p className="text-lg text-soft mb-6">
              Stay informed about FDA regulatory updates, warning letters, drug
              shortages, and 503B compounding status for semaglutide and
              tirzepatide medications.
            </p>
            <p className="text-sm text-muted">Last updated: May 13, 2026</p>
          </div>
        </div>
      </section>

      {/* Current Status Summary */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Semaglutide</p>
                <Badge className="mt-2 bg-amber/10 text-amber hover:bg-amber/20">
                  Shortage Active
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Tirzepatide</p>
                <Badge className="mt-2 bg-amber/10 text-amber hover:bg-amber/20">
                  Shortage Active
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">503B Status</p>
                <Badge className="mt-2 bg-forest/10 text-forest hover:bg-forest/20">
                  Compounding Allowed
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Active Warnings</p>
                <Badge className="mt-2 bg-coral/10 text-coral hover:bg-coral/20">
                  1 Warning Letter
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="timeline" className="max-w-4xl mx-auto">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="providers">Provider Standing</TabsTrigger>
              <TabsTrigger value="explainer">What This Means</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <div className="space-y-4">
                {fdaEvents.map((event) => (
                  <Card
                    key={event.id}
                    className={event.status === "resolved" ? "opacity-60" : ""}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getSeverityColor(event.severity)}>
                              {getTypeLabel(event.type)}
                            </Badge>
                            {event.status === "resolved" && (
                              <Badge variant="outline">Resolved</Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-midnight mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm text-slate">{event.summary}</p>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          {event.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="providers">
              <Card>
                <CardHeader>
                  <CardTitle>Provider Regulatory Standing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Provider</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Pharmacy Type</th>
                          <th className="text-left py-3 px-4 font-medium">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {providerStanding.map((provider, index) => (
                          <tr key={index} className="border-b last:border-0">
                            <td className="py-3 px-4 font-medium">
                              <Link
                                href={`/providers/${provider.provider.toLowerCase().replace(/[/\s]/g, "-")}`}
                                className="text-forest hover:underline"
                              >
                                {provider.provider}
                              </Link>
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-forest/10 text-forest">
                                {provider.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate">
                              {provider.pharmacy}
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {provider.notes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="explainer">
              <div className="prose prose-slate max-w-none">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-midnight mb-4">
                      What the FDA Shortage Means for You
                    </h3>
                    <p className="mb-4">
                      When the FDA declares a drug shortage, it allows certain
                      registered compounding pharmacies (503B outsourcing
                      facilities) to legally produce compounded versions of the
                      medication. This means:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>
                          <strong>Compounded GLP-1 is legal</strong> while the
                          shortage is in effect
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>
                          <strong>503B pharmacies</strong> must meet FDA quality
                          standards
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>
                          <strong>Lower prices</strong> are available through
                          compounded options
                        </span>
                      </li>
                    </ul>

                    <h3 className="font-display text-xl font-semibold text-midnight mb-4">
                      What Happens When the Shortage Ends?
                    </h3>
                    <p className="mb-4">
                      If the FDA resolves the drug shortage, 503B pharmacies
                      would need to stop compounding that specific medication.
                      However:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>
                          Shortages have been ongoing since 2022 with no
                          immediate end in sight
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>
                          We monitor FDA announcements and will update this page
                          with any changes
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AffiliateDisclosure variant="full" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Newsletter variant="default" />
        </div>
      </section>
    </>
  );
}
