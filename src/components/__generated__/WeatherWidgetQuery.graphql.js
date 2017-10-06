/**
 * @flow
 * @relayHash 6c89b4b32ccfb9ea4c9553f0584f4429
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type WeatherWidgetQueryResponse = {|
  +viewer: {|
    +id: string;
    +weather: ?{|
      +temperature: number;
      +description: string;
    |};
  |};
|};
*/


/*
query WeatherWidgetQuery(
  $zipCode: String!
) {
  viewer {
    id
    weather(zipcode: $zipCode) {
      temperature
      description
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "zipCode",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "WeatherWidgetQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "zipcode",
                "variableName": "zipCode",
                "type": "String!"
              }
            ],
            "concreteType": "WeatherPayload",
            "name": "weather",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "temperature",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "WeatherWidgetQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "zipCode",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "WeatherWidgetQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "zipcode",
                "variableName": "zipCode",
                "type": "String!"
              }
            ],
            "concreteType": "WeatherPayload",
            "name": "weather",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "temperature",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
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
  "text": "query WeatherWidgetQuery(\n  $zipCode: String!\n) {\n  viewer {\n    id\n    weather(zipcode: $zipCode) {\n      temperature\n      description\n    }\n  }\n}\n"
};

module.exports = batch;
