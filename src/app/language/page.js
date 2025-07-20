'use client';

import React, { useState } from 'react';
import './Language.css';

const codeSnippets = {
  Python: {
    'If-Else': `x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller or equal")`,

    'For Loop': `for i in range(5):
    print(i)`,

    'While Loop': `i = 0
while i < 5:
    print(i)
    i += 1`,

    'Functions': `def add(a, b):
    return a + b`,

    'Arrays': `arr = [1, 2, 3]
print(arr[0])`,

    'Dictionaries': `person = {"name": "Alice", "age": 25}
print(person["name"])`,

    'Strings': `s = "Hello"
print(s.upper())`
  },

  'C++': {
    'If-Else': `int x = 10;
if (x > 5)
    cout << "Greater";
else
    cout << "Smaller or equal";`,

    'For Loop': `for (int i = 0; i < 5; i++)
    cout << i << endl;`,

    'While Loop': `int i = 0;
while (i < 5) {
    cout << i << endl;
    i++;
}`,

    'Functions': `int add(int a, int b) {
    return a + b;
}`,

    'Arrays': `int arr[] = {1, 2, 3};
cout << arr[0];`,

    'Dictionaries': `#include <map>
map<string, int> person;
person["age"] = 25;`,

    'Strings': `string s = "Hello";
cout << s;`
  },

  JavaScript: {
    'If-Else': `let x = 10;
if (x > 5) {
    console.log("Greater");
} else {
    console.log("Smaller or equal");
}`,

    'For Loop': `for (let i = 0; i < 5; i++) {
    console.log(i);
}`,

    'While Loop': `let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}`,

    'Functions': `function add(a, b) {
    return a + b;
}`,

    'Arrays': `let arr = [1, 2, 3];
console.log(arr[0]);`,

    'Dictionaries': `let person = {name: "Alice", age: 25};
console.log(person.name);`,

    'Strings': `let s = "Hello";
console.log(s.toUpperCase());`
  },

  Java: {
    'If-Else': `int x = 10;
if (x > 5)
    System.out.println("Greater");
else
    System.out.println("Smaller or equal");`,

    'For Loop': `for (int i = 0; i < 5; i++)
    System.out.println(i);`,

    'While Loop': `int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}`,

    'Functions': `int add(int a, int b) {
    return a + b;
}`,

    'Arrays': `int[] arr = {1, 2, 3};
System.out.println(arr[0]);`,

    'Dictionaries': `HashMap<String, Integer> map = new HashMap<>();
map.put("age", 25);`,

    'Strings': `String s = "Hello";
System.out.println(s.toUpperCase());`
  },

  Go: {
    'If-Else': `x := 10
if x > 5 {
    fmt.Println("Greater")
} else {
    fmt.Println("Smaller or equal")
}`,

    'For Loop': `for i := 0; i < 5; i++ {
    fmt.Println(i)
}`,

    'While Loop': `i := 0
for i < 5 {
    fmt.Println(i)
    i++
}`,

    'Functions': `func add(a int, b int) int {
    return a + b
}`,

    'Arrays': `arr := [3]int{1, 2, 3}
fmt.Println(arr[0])`,

    'Dictionaries': `m := map[string]int{"age": 25}
fmt.Println(m["age"])`,

    'Strings': `s := "Hello"
fmt.Println(strings.ToUpper(s))`
  },

  Kotlin: {
    'If-Else': `val x = 10
if (x > 5) {
    println("Greater")
} else {
    println("Smaller or equal")
}`,

    'For Loop': `for (i in 0..4) {
    println(i)
}`,

    'While Loop': `var i = 0
while (i < 5) {
    println(i)
    i++
}`,

    'Functions': `fun add(a: Int, b: Int): Int {
    return a + b
}`,

    'Arrays': `val arr = arrayOf(1, 2, 3)
println(arr[0])`,

    'Dictionaries': `val map = mapOf("age" to 25)
println(map["age"])`,

    'Strings': `val s = "Hello"
println(s.uppercase())`
  }
};

export default function Language() {
  const languages = Object.keys(codeSnippets);
  const [selectedLang, setSelectedLang] = useState('Python');

  return (
    <div className="lang-container">
      <h1 className="lang-title">Language Syntax Reference</h1>

      <div className="dropdown-wrapper">
        <label htmlFor="lang">Choose Language:</label>
        <select
          id="lang"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="topics">
        <ul>
          {Object.entries(codeSnippets[selectedLang]).map(([topic, snippet]) => (
            <li className="topic-block" key={topic}>
              <h2>{topic}</h2>
              <pre><code>{snippet}</code></pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}