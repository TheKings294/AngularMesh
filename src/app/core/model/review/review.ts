export interface Review {
  "rating": number,
  "comment": string,
  "date": Date,
  "reviewerName": string,
  "reviewerEmail": string
}

//Date in string for the response
export interface ReviewResponse {
  "rating": number,
  "comment": string,
  "date": string,
  "reviewerName": string,
  "reviewerEmail": string
}
