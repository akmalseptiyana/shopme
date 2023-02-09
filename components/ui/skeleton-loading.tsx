export function ProductSkeleton() {
  return (
    <div className="h-[280px] w-[270px] animate-pulse">
      <div className="h-full w-full rounded-xl bg-gray-300"></div>
      <div className="mt-4 h-4 w-full rounded bg-gray-300" />
      <div className="mx-auto mt-5 h-4 w-1/3 rounded bg-gray-300" />
    </div>
  );
}
