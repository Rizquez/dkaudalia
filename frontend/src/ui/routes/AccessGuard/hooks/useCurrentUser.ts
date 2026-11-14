import { getCurrentUser } from "@/core/business/current-user/service";
import { useQuery } from "@tanstack/react-query";

const CURRENT_USER_QUERY_KEY = "current-user";

const useCurrentUser = () => {
  const query = useQuery({
    queryKey: [CURRENT_USER_QUERY_KEY],
    queryFn: () => getCurrentUser.execute(),
  });

  return {
    ...query,
    currentUser: query.data,
  };
};

export default useCurrentUser;
