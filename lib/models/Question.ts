export interface Question {
  id: string;
  text: string;
  options: string[];
  scores: number[];
}

export class QuestionClass implements Question {
  id: string;
  text: string;
  options: string[];
  scores: number[];

  constructor({
    id,
    text,
    options,
    scores,
  }: {
    id: string;
    text: string;
    options: string[];
    scores: number[];
  }) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.scores = scores;
  }

  static fromMap(id: string, data: any): QuestionClass {
    return new QuestionClass({
      id,
      text: data.text ?? '',
      options: data.options ?? [],
      scores: data.scores ?? [],
    });
  }

  toMap() {
    return {
      text: this.text,
      options: this.options,
      scores: this.scores,
    };
  }
}
