/**
 * @flow
 * @relayHash 92373adf26218c819c07d9216d1abb97
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdatePostMutationVariables = {|
  input: {
    description?: ?string;
    id: string;
    imageUrl?: ?string;
    location?: ?string;
    imageId?: ?string;
    image?: ?{
      name: string;
      imageIds?: ?$ReadOnlyArray<string>;
      image?: ?$ReadOnlyArray<{
        description: string;
        imageUrl: string;
        location?: ?string;
      }>;
    };
    clientMutationId: string;
  };
|};

export type UpdatePostMutationResponse = {|
  +updatePost: ?{|
    +post: ?{|
      +id: string;
      +description: string;
      +imageUrl: string;
      +location: ?string;
      +image: ?{|
        +url: string;
      |};
    |};
  |};
|};
*/


/*
mutation UpdatePostMutation(
  $input: UpdatePostInput!
) {
  updatePost(input: $input) {
    post {
      id
      description
      imageUrl
      location
      image {
        url
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdatePostInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePostMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdatePostInput!"
          }
        ],
        "concreteType": "UpdatePostPayload",
        "name": "updatePost",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "imageUrl",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "location",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "File",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdatePostMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdatePostInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdatePostMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdatePostInput!"
          }
        ],
        "concreteType": "UpdatePostPayload",
        "name": "updatePost",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "imageUrl",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "location",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "File",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation UpdatePostMutation(\n  $input: UpdatePostInput!\n) {\n  updatePost(input: $input) {\n    post {\n      id\n      description\n      imageUrl\n      location\n      image {\n        url\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
