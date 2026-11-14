import Link from "next/link";
import { FiArrowLeft, FiUserX } from "react-icons/fi";

const FriendNotFound = ({ friendId }) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#244d3f]/10 text-[#244d3f] ring-8 ring-[#244d3f]/5">
          <FiUserX size={36} />
        </div>

        {/* ID chip */}
        {friendId && (
          <span className="badge badge-ghost mt-6 px-3 py-3 text-xs text-gray-500">
            Friend ID: {friendId}
          </span>
        )}

        {/* Message */}
        <h1 className="mt-4 text-2xl font-bold text-[#1f2937] sm:text-3xl">
          Friend not found
        </h1>
        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          We couldn&apos;t find anyone with this ID. They may have been removed,
          or the link might be incorrect.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="btn mt-8 w-full border-0 bg-[#244d3f] text-white shadow-none hover:bg-[#1c3d32] sm:w-auto sm:px-8"
        >
          <FiArrowLeft size={18} />
          Back to Friends
        </Link>
      </div>
    </div>
  );
};

export default FriendNotFound;
