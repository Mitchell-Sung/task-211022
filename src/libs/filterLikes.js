const filterLikes = (likes) => {
	const results = likes.filter((like) => like.isLiked === true);
	return results;
};

export default filterLikes;
