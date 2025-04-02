export default function Company({ company }) {
  return (
    <>
      <div className="flex flex-col gap-2 px-4 ">
        <span className="text-gray-400">Name</span>
        <span>{company.name?.toString()}</span>
      </div>
    </>
  );
}
