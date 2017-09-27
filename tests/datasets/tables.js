const standardTable = {
  settings: {},
  columns: [
    {key: 'foo'}, {key: 'bar'}, {key: 'baz'}
  ],
  data: [
    {foo: '1', bar: '2', baz: '3'},
    {foo: '4', bar: '5', baz: '6'},
    {foo: '7', bar: '8', baz: '9'},
  ]
};

const customRender = {
  settings: {},
  columns: [
    {key: 'foo'}, {key: 'bar', component: 'custom-render'}, {key: 'baz'}
  ],
  data: [
    {foo: '1', bar: '2', baz: '3'},
    {foo: '4', bar: '5', baz: '6'},
    {foo: '7', bar: '8', baz: '9'},
  ]
};

const customHeaderRender = {
  settings: {},
  columns: [
    {key: 'foo'}, {key: 'bar', header: {component: 'custom-render'}}, {key: 'baz'}
  ],
  data: [
    {foo: '1', bar: '2', baz: '3'},
    {foo: '4', bar: '5', baz: '6'},
    {foo: '7', bar: '8', baz: '9'},
  ]
};

const sortableTable = {
  settings: {},
  columns: [
    {key: 'foo'}, {key: 'bar'}, {key: 'baz'}
  ],
  data: [
    {foo: '1', bar: '1', baz: '1'},
    {foo: '1', bar: '2', baz: '2'},
    {foo: '2', bar: '1', baz: '3'},
  ]
};

const nestedDataTable = {
  settings: {},
  columns: [
    {key: 'foo.one'}, {key: 'foo.two'}, {key: 'bar'}, {key: 'baz'}
  ],
  data: [
    {foo: {one: 'a', two: 'b'}, bar: '1', baz: '4'},
    {foo: {one: 'c', two: 'd'}, bar: '2', baz: '5'},
    {foo: {one: 'e', two: 'f'}, bar: '3', baz: '6'},
  ]
};

const paginationTable = {
  settings: {},
  columns: [
    {key: 'foo'}, {key: 'bar'}, {key: 'baz'}
  ],
  data: (function(length){
    let i = 0;
    let result = [];
    while (i++ < length) {
      result.push({
        foo: String(i),
        bar: String(i),
        baz: String(i)
      })
    }
    return result;
  })(100)
};

export {standardTable, customRender, customHeaderRender, sortableTable, nestedDataTable, paginationTable};

export default standardTable;