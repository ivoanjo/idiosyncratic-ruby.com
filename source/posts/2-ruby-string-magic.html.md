---
title: Ruby String Magic
date: 2015-05-02
tags: strings, regex, syntax, stdlib
commit: cee4bd8f81fa108aecc5b01734572fd3e69dcff4
---

Ruby strings are powerful. You could say Ruby is built around manipulating strings. There are tons of ways how to work with strings and as of Ruby 2.7.1 `String` offers 130 instance methods. Knowing them well can save you a lot of time.

ARTICLE

What follows is a list of 10 lesser known things about strings: Some of them useful, some of them idiosyncratic, some both.

## Named Format Strings

<blockquote class="twitter-tweet" lang="en"><p>Btw, Ruby&#39;s format strings can be used with hashes:<br/>&quot;%&lt;language&gt;s: %&lt;author&gt;s&quot; % { language: &quot;Ruby&quot;, author: &quot;matz&quot; } #=&gt; &quot;Ruby: matz&quot;</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/527152031782674432">October 28, 2014</a></blockquote>

## String Concatenation

<blockquote class="twitter-tweet" lang="en"><p>There is a lesser-known syntax for concatenating string literals: &quot;just&quot; &quot;put&quot; &quot;them&quot; &quot;directly&quot;&quot;after&quot; &quot;each&quot; &quot;other&quot;</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/510013718076600320">September 11, 2014</a></blockquote>

## Strings + Empty Ranges

<blockquote class="twitter-tweet" lang="en"><p>Ruby is strange. How can an *empty* range have an effect when applied to a string?<br/>r = 0..-3<br/>r.to_a.empty? #=&gt; true<br/>&quot;Ruby&quot;[r] #=&gt; &quot;Ru&quot;</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/519066888014659584">October 6, 2014</a></blockquote>

## Whitespace Matching

<blockquote class="twitter-tweet" lang="en"><p>Unicode is full of whitespaces. This is how you match them:<br/>a=&quot;    　&quot; #=&gt; &quot;    　&quot;<br/>a.scan(/\s/).size #=&gt; 1<br/>a.scan(/[[:space:]]/).size #=&gt; 5</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/539440415498579969">December 1, 2014</a></blockquote>

## `String#succ`

<blockquote class="twitter-tweet" lang="en"><p>Ruby&#39;s weird calculation of string successors:<br/>&quot;9z&quot;.succ #=&gt; &quot;10a&quot;<br/>&quot;z9&quot;.succ #=&gt; &quot;aa0&quot;</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/520230545465548801">October 9, 2014</a></blockquote>

## Stdlib String Compression

<blockquote class="twitter-tweet" lang="en"><p>Simple stdlib string compression:<br/>require &#39;zlib&#39;<br/>s = &quot;Ruby&quot;*99<br/>s.size #=&gt; 396<br/>c = Zlib.deflate(s)<br/>c.size #=&gt; 17<br/>Zlib.inflate(c) == s #=&gt;true</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/511902948805599233">September 16, 2014</a></blockquote>

## Using Regex Groups in `String#[]`

<blockquote class="twitter-tweet" lang="en"><p>You can use regex incl. captured groups when accessing substrings via the [] method: &quot;#42&quot;[/.(\d+)/, 1] #=&gt; &quot;42&quot;</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/508605294059192320">September 7, 2014</a></blockquote>

## `Rexep.union`

<blockquote class="twitter-tweet" lang="en"><p>If you have an array of strings, you can automatically generate a regex that matches any the strings: regex = Regexp.union(array_of_strings)</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/510441137254195200">September 12, 2014</a></blockquote>

## Convert a String from *snake_case* to *CamelCase*

<blockquote class="twitter-tweet" lang="en"><p>You can camelize a string (some_string =&gt; SomeString) with:<br/>&quot;some_string&quot;.gsub(/(?:^|_)([a-z])/) do $1.upcase end</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/509330964246720512">September 9, 2014</a></blockquote>

## Convert a String from *CamelCase* to *snake_case*

<blockquote class="twitter-tweet" lang="en"><p>You can snakify a string (SomeString =&gt; some_string) with: <br/>&quot;SomeString&quot;.gsub(/(?&lt;!^)[A-Z]/) do &quot;_#$&amp;&quot; end.downcase</p>&mdash; Ruby String Magic (@RubyStrings) <a href="https://twitter.com/RubyStrings/status/508995693277904896">September 8, 2014</a></blockquote>

## Resources

- [RDoc: String](http://www.ruby-doc.org/core/String.html)
- [Source: String](https://github.com/ruby/ruby/blob/trunk/string.c)
- [Rubinus Source: String](https://github.com/rubinius/rubinius/blob/master/kernel/common/string.rb)
