import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCourses, getCourse, getCreateCourses } from "./course.api";

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
    mutationFn: getCreateCourses,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
        refetchType: "active",
      });
    },
  });
};
