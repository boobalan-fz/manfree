import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";
import { createCourse, getAllCourse } from "@/services/course.service";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const createdCourse = await createCourse(data);

    if (!createdCourse) {
      return NextResponse.json(
        { message: "course not created" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Course Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error in creating course ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allCourse = await getAllCourse();

    if (!allCourse) {
      return NextResponse.json(
        { message: "course not found" },
        { status: 400 }
      );
    }
    return NextResponse.json(allCourse);
  } catch (error) {
    return NextResponse.json(
      { message: `Error in getting courses ${error}` },
      { status: 500 }
    );
  }
}
