import React from "react";
import Tooltip from "./Tooltip";
import BookmarkIcon from "./icons/BookmarkIcon";

interface Props {
  isBookmarked: boolean;
  onToggle: () => void;
}

const BookmarkButton: React.FC<Props> = ({ isBookmarked, onToggle }) => {
  return (
    <Tooltip tip={isBookmarked ? "Remove bookmark" : "Save this question to practice again later."}>
      <button
        onClick={onToggle}
        aria-pressed={isBookmarked}
        className={`flex-1 flex items-center justify-center px-8 py-4 text-lg rounded-lg border
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                    ${
                      isBookmarked
                        ? "bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100"
                        : "bg-white border-slate-300 text-slate-900 hover:bg-slate-50"
                    }`}
      >
        <BookmarkIcon
          filled={isBookmarked}
          className={`w-5 h-5 mr-2 ${isBookmarked ? "text-amber-600" : "text-slate-900"}`}
        />
        {isBookmarked ? "Bookmarked" : "Bookmark for Retry"}
      </button>
    </Tooltip>
  );
};

export default BookmarkButton;
