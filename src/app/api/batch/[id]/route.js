import {
  deleteBatchById,
  getBatchById,
  updateBatchById,
} from "@/services/batch.service";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const getSingleBatch = await getBatchById(id);

    if (!getSingleBatch) {
      return NextResponse.json({ message: "batch not found" }, { status: 400 });
    }

    return NextResponse.json(getSingleBatch, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error on getting a batch ${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const deletedBatch = await deleteBatchById(id);

    if (!deletedBatch) {
      return NextResponse.json({ message: "batch not found" }, { status: 400 });
    }

    return NextResponse.json(
      { message: "batch deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error on deleting a batch ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    const updatedBatch = await updateBatchById(id, data);

    if (!updatedBatch) {
      return NextResponse.json(
        { message: "batch not updated" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "batch updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error on updating a batch ${error}` },
      { status: 500 }
    );
  }
}
