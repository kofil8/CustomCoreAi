import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  business: z.string().min(2, "Business name is required"),
  email: z.string().email("Valid work email is required"),
  website: z.string().optional().default(""),
  projectType: z.string().min(1, "Please select what you need help with"),
  problemDescription: z.string().min(10, "Please provide a brief problem description"),
  budget: z.string().optional().default("Not specified"),
});

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const validatedData = contactSchema.parse(body);
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    console.log("[CustomCoreAI Lead Ingestion]", {
      leadId,
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project request submitted successfully. A systems architect will review within 24 hours.",
        leadId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[CustomCoreAI API Exception]", error);

    if (error?.issues || error?.errors) {
      const issues = error.issues || error.errors;
      return NextResponse.json(
        {
          success: false,
          errors: issues.map((i: any) => ({
            field: Array.isArray(i.path) ? i.path.join(".") : String(i.path),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal server error processing lead request.",
      },
      { status: 500 }
    );
  }
}
