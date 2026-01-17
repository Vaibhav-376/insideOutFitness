import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { FitnessGoal } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phone, goal, message } = await request.json();

    if (!fullName || !email || !phone || !goal) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!Object.values(FitnessGoal).includes(goal as FitnessGoal)) {
      return NextResponse.json(
        { error: "Invalid goal" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        fullName,
        email,
        phone,
        goal: goal as FitnessGoal,
        message,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
