import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Optional: Clear existing data (uncomment if you want a clean slate each time)
  await prisma.lesson.deleteMany();

  await prisma.lesson.createMany({
    data: [
      // 2 Easy
      {
        title: "Two Sum",
        content: `
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. You may assume that each input would have exactly one solution, 
and you may not use the same element twice. You can return the answer in any order.
        `,
        difficulty: "Easy",
        pythonSkeleton: `def twoSum(self, nums: List[int], target: int) -> List[int]:
            `,
        javaSkeleton: `public int[] twoSum(int[] nums, int target) {
        
      }`,
      },
      {
        title: "Palindrome Number",
        content: `
Given an integer x, return true if x is a palindrome, and false otherwise.
An integer is a palindrome when it reads the same forward and backward.
        `,
        difficulty: "Easy",
        pythonSkeleton: `def isPalindrome(self, x: int) -> bool:
            `,
        javaSkeleton: `public boolean isPalindrome(int x) {
        
    }`,
      },

      // 2 Medium
      {
        title: "3Sum",
        content: `
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
        `,
        difficulty: "Medium",
        pythonSkeleton: `def threeSum(self, nums: List[int]) -> List[List[int]]:
            `,
        javaSkeleton: `public List<List<Integer>> threeSum(int[] nums) {
        
    }`,
      },
      {
        title: "Longest Substring Without Repeating Characters",
        content: `
Given a string s, find the length of the longest substring without repeating characters.
        `,
        difficulty: "Medium",
        pythonSkeleton: `def lengthOfLongestSubstring(self, s: str) -> int:
            `,
        javaSkeleton: `public int lengthOfLongestSubstring(String s) {
        
    }`,
      },

      // 2 Hard
      {
        title: "Median of Two Sorted Arrays",
        content: `
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the 
two sorted arrays. The overall run time complexity should be O(log (m+n)).
        `,
        difficulty: "Hard",
        pythonSkeleton: `def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
            `,
        javaSkeleton: `public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
    }`,
      },
      {
        title: "Merge k Sorted Lists",
        content: `
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
        `,
        difficulty: "Hard",
        pythonSkeleton: `def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
            `,
        javaSkeleton: `public ListNode mergeKLists(ListNode[] lists) {
        
    }`,
      },
    ],
  });

  console.log("Seeding complete: Inserted 6 lessons.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });