export interface BaseReview<TDate> {
  rating: number;
  comment: string;
  date: TDate;
  reviewerName: string;
  reviewerEmail: string;
}
