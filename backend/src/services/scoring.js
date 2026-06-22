class ScoringService {
  calculateScore(responses = []) {
    if (!responses.length) {
      return 0;
    }

    const total = responses.reduce(
      (sum, item) => sum + (item.score || 0),
      0
    );

    return Math.round(total / responses.length);
  }
}

module.exports = new ScoringService();
