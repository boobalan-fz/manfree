import { createBatch, getAllBatch } from "@/services/batch.service";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const createdBatch = await createBatch(data);

    if (!createdBatch) {
      return NextResponse.json(
        { message: "batch not created" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "batch created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error on creating batch ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const allBatches = await getAllBatch();
    if (!allBatches) {
      return NextResponse.json({ message: "batch not found" }, { status: 400 });
    }
    return NextResponse.json(allBatches, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error on getting batch ${error}` },
      { status: 500 }
    );
  }
}
