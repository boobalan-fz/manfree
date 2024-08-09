import {
  deleteCourseById,
  getCourseById,
  updateCourseById,
} from "@/services/course.service";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    const updateCourse = await updateCourseById(id, data);
    if (!updateCourse) {
      return NextResponse.json(
        { message: "course not updated" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Course updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error in updating course ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const singleCourse = await getCourseById(id);

    if (!singleCourse) {
      return NextResponse.json(
        { message: "course not found" },
        { status: 400 }
      );
    }
    return NextResponse.json(singleCourse, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error in getting course ${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const deletedCourse = await deleteCourseById(id);

    if (!deletedCourse) {
      return NextResponse.json(
        { message: "Course not deleted" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error in deleting course ${error}` },
      { status: 500 }
    );
  }
}
