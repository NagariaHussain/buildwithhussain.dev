import * as React from "react";

export default function ArticleReactions({ articleName }) {
  const [reactionCounts, setReactionCounts] = React.useState({
    likes: 0,
    hundred: 0,
  });
  const [initialReactionsFetched, setInitialReactionsFetched] =
    React.useState(false);

  const [isLoadingReactions, setIsLoadingReactions] = React.useState(true);

  const handleLike = () => {
    setReactionCounts({
      ...reactionCounts,
      likes: reactionCounts.likes + 1,
    });

    incrementReactionInBackend("like", articleName);
  };

  const handle100 = () => {
    setReactionCounts({
      ...reactionCounts,
      hundred: reactionCounts.hundred + 1,
    });

    incrementReactionInBackend("hundred", articleName);
  };

  const handleConfetti = () => {
    setReactionCounts({
      ...reactionCounts,
      confetti: reactionCounts.confetti + 1,
    });

    incrementReactionInBackend("confetti", articleName);
  };

  React.useEffect(() => {
    // fetch only once!
    if (initialReactionsFetched) return;

    // fetch initial reaction counts
    fetch(
      `https://cms.buildwithhussain.dev/api/method/get-reaction-counts?article_name=${articleName}&reaction_type=like`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        setReactionCounts({
          likes: data.reactions.count_like,
          hundred: data.reactions.count_100,
          confetti: data.reactions.count_confetti,
        });
        setIsLoadingReactions(false);
      });

    setInitialReactionsFetched(true);
  }, [initialReactionsFetched, articleName]);

  return (
    <ul className="flex flex-row items-center justify-center md:justify-start space-x-4">
      {isLoadingReactions && (
        <span className="text-green-900 text-sm">Loading Reactions...</span>
      )}

      {!isLoadingReactions && (
        <>
          <li>
            <button
              className="text-xl font-medium px-3 py-2 flex flex-row space-x-2 bg-green-500/20 rounded text-green-900 active:bg-green-500/50 hover:bg-green-500/40"
              onClick={handleLike}
            >
              <span>👍🏼</span>
              <span>{reactionCounts.likes}</span>
            </button>
          </li>
          <li>
            <button
              className="text-xl font-medium px-3 py-2 flex flex-row space-x-2 bg-green-500/20 rounded text-green-900 active:bg-green-500/50 hover:bg-green-500/40"
              onClick={handle100}
            >
              <span>💯</span>
              <span>{reactionCounts.hundred}</span>
            </button>
          </li>
          <li>
            <button
              className="text-xl font-medium px-3 py-2 flex flex-row space-x-2 bg-green-500/20 rounded text-green-900 active:bg-green-500/50 hover:bg-green-500/40"
              onClick={handleConfetti}
            >
              <span>🎉</span>
              <span>{reactionCounts.confetti}</span>
            </button>
          </li>
        </>
      )}
    </ul>
  );
}

function incrementReactionInBackend(reaction, articleName) {
  fetch("https://cms.buildwithhussain.dev/api/method/increment-reaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reaction_type: reaction,
      article_name: articleName,
    }),
    mode: "cors",
  });
}
