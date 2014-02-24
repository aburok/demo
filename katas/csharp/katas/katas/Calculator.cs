using System;
using System.Collections.Generic;
using System.Linq;

namespace katas
{
    public class Calculator
    {
        public static int Add(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return 0;
            }

            var numbers = ParseInput(input);

            var sum = numbers.Sum();

            return sum;
        }

        private static IEnumerable<int> ParseInput(string input)
        {
            var delimiters = new List<string> { ",", "\n" };
            var unparsedNumbers = ParseCustomDelimiter(input, delimiters);

            var numbers = ParseNumbers(unparsedNumbers, delimiters);

            ValidateNumbers(numbers);

            numbers = IgnoreNumbersOver1000(numbers);

            return numbers;
        }

        private static IEnumerable<int> ParseNumbers(string unparsedNumbers, List<string> delimiters)
        {
            var strNumbers = unparsedNumbers.Split(
                delimiters.ToArray(),
                StringSplitOptions.RemoveEmptyEntries);

            var numbers = strNumbers.Select(int.Parse).ToList();

            return numbers;
        }

        private static IEnumerable<int> IgnoreNumbersOver1000(IEnumerable<int> numbers)
        {
            numbers = numbers.Where(n => n <= 1000);
            return numbers;
        }

        private static void ValidateNumbers(IEnumerable<int> numbers)
        {
            var negatives = numbers.Where(n => n < 0);
            if (negatives.Any())
            {
                throw new ArgumentException(
                    string.Format("negatives not allowed : {0}.", string.Join(",", negatives)));
            }
        }

        private static string ParseCustomDelimiter(string input, List<string> delimiters)
        {
            if (!input.StartsWith("//"))
                return input;

            var newLineCharPosition = input.IndexOf("\n", StringComparison.Ordinal);

            var customDelimiters = input
                .Substring(2, newLineCharPosition - 2)
                .Trim('[', ']')
                .Split(new[] { "][" }, StringSplitOptions.None);

            delimiters.AddRange(customDelimiters);

            return input.Substring(newLineCharPosition + 1);
        }
    }
}