import {ReviewResponse} from '../model/review/dto-review';
import {Review} from '../model/review/domain-review';
import {dateToString} from './mapper-date';

export const mapReview = (dto: ReviewResponse): Review => ({
  ...dto,
  date: new Date(dto.date),
});

export const mapReviewToDTO = (review: Review): ReviewResponse => ({
  ...review,
  date: dateToString(review.date),
});
