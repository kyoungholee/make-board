import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoadrs {
      _id
      writer
      title
      createdAt
    }
  }
`;
