export interface TestResult {
  score: number;
  level: string;
  date: Date;
  answers: Record<string, number>;
  timestamp: Date;
}

export class TestResultClass implements TestResult {
  score: number;
  level: string;
  date: Date;
  answers: Record<string, number>;
  timestamp: Date;

  constructor({
    score,
    level,
    date,
    answers,
  }: {
    score: number;
    level: string;
    date: Date;
    answers: Record<string, number>;
  }) {
    this.score = score;
    this.level = level;
    this.date = date;
    this.answers = answers;
    this.timestamp = date;
  }

  static fromJson(json: any): TestResultClass {
    return new TestResultClass({
      score: json.score ?? 0,
      level: json.level ?? '',
      date: json.timestamp ? new Date(json.timestamp) : new Date(),
      answers: json.answers ?? {},
    });
  }

  toJson() {
    return {
      score: this.score,
      level: this.level,
      timestamp: this.date.toISOString(),
      answers: this.answers,
    };
  }

  static getSeverityColor(level: string): string {
    switch (level.toLowerCase()) {
      case 'minimal':
        return 'text-minimal';
      case 'mild':
        return 'text-mild';
      case 'moderate':
        return 'text-moderate';
      case 'moderately severe':
        return 'text-moderatelySevere';
      case 'severe':
        return 'text-severe';
      default:
        return 'text-gray-500';
    }
  }

  static getSeverityLevel(score: number): string {
    if (score >= 0 && score <= 4) {
      return 'Minimal';
    } else if (score >= 5 && score <= 9) {
      return 'Mild';
    } else if (score >= 10 && score <= 14) {
      return 'Moderate';
    } else if (score >= 15 && score <= 19) {
      return 'Moderately severe';
    } else if (score >= 20) {
      return 'Severe';
    } else {
      return 'Unknown';
    }
  }
}
