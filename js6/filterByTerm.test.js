const filterByTerm = require('./filterByTerm');

describe("Filter function", () => {
  test("it should filter by a search term in lower case", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
      //{ id: 4, url: "https://www.Link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];
    //const output1 = [{ id: 4, url: "https://www.Link3.dev" }];
    expect(filterByTerm(input, "link")).toEqual(output);
    //expect(filterByTerm(input, "LINK")).toEqual(output1);
  });
  test("it should filter by a search term in upper case", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.Link3.dev" }
    ];


    const output1 = [{ id: 3, url: "https://www.Link3.dev" }];

    expect(filterByTerm(input, "LINK")).toEqual(output1);

  });
  // test('should throw error when searchTerm is empty string ', () => {
  //   expect(() => (filterByTerm(input, "")).toThrow(
  //     'inputArr cannot be empty',

  // );

  test('should throw error when searchTerm is empty string ', () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.Link3.dev" }
    ];
    expect(() => filterByTerm(input, "")).toThrow(
      'searchTerm cannot be empty',
    );

  });
  test('should throw error when inputArray is empty  ', () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.Link3.dev" }
    ];

    expect(() => filterByTerm([], "link")).toThrow(
      'inputArr cannot be empty',
    );
  });
});
