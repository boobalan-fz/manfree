import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCourses,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "./course.api";

export const useGetAllCourses = () =>
  useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
    enabled: true,
  });

export const useGetCourse = (id) =>
  useQuery({
    queryKey: ["courses", id],
    queryFn: () => getCourse(id),
    enabled: true,
  });

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCourses,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
        refetchType: "active",
      });
    },
  });
};

export const useDeleteCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
        refetchType: "active",
      });
    },
  });
};

export const useUpdateCourse = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCourse(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
        refetchType: "active",
      });
    },
  });
};
