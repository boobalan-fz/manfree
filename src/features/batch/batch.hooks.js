import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBatch, deleteBatch, getAllBatches, getBatch } from "./batch.api";

export const useGetAllBatches = () =>
  useQuery({
    queryKey: ["batches"],
    queryFn: () => getAllBatches(),
    enabled: true,
  });

export const useGetbBatch = (id) =>
  useQuery({
    queryKey: ["batches", id],
    queryFn: () => getBatch(id),
    enabled: true,
  });

export const useCreateBatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBatch,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["batches"],
        refetchType: "active",
      });
    },
  });
};

export const useDeleteBatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBatch,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["batches"],
        refetchType: "active",
      });
    },
  });
};
