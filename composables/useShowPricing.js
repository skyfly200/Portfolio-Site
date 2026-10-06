// Pricing is hidden unless the URL has a ?pricing flag (e.g. /services?pricing)
export const useShowPricing = () => {
  const route = useRoute();
  return computed(() => {
    const flag = route.query.pricing;
    return flag !== undefined && flag !== "0" && flag !== "false";
  });
};
