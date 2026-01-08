import { BLOCK } from './World';

export interface Recipe {
    result: { id: number, count: number };
    // Pattern: array of rows. Characters map to keys.
    pattern?: string[]; 
    keys?: Record<string, number>;
    // Shapeless: just list of ingredients
    ingredients?: { id: number, count: number }[];
}

export const RECIPES: Recipe[] = [
    // 1. Planks from Wood (Shapeless)
    {
        result: { id: BLOCK.PLANKS, count: 4 },
        ingredients: [{ id: BLOCK.WOOD, count: 1 }]
    },
    // 2. Sticks from Planks (Shaped 2 vertical)
    {
        result: { id: BLOCK.STICK, count: 4 },
        pattern: [
            "P",
            "P"
        ],
        keys: { "P": BLOCK.PLANKS }
    },
    // 3. Crafting Table from Planks (2x2)
    {
        result: { id: BLOCK.CRAFTING_TABLE, count: 1 },
        pattern: [
            "PP",
            "PP"
        ],
        keys: { "P": BLOCK.PLANKS }
    },
    // --- TOOLS (Wooden) ---
    {
        result: { id: BLOCK.WOODEN_PICKAXE, count: 1 },
        pattern: [
            "PPP",
            " S ",
            " S "
        ],
        keys: { "P": BLOCK.PLANKS, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.WOODEN_AXE, count: 1 },
        pattern: [
            "PP",
            "PS",
            " S"
        ],
        keys: { "P": BLOCK.PLANKS, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.WOODEN_SWORD, count: 1 },
        pattern: [
            "P",
            "P",
            "S"
        ],
        keys: { "P": BLOCK.PLANKS, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.WOODEN_SHOVEL, count: 1 },
        pattern: [
            "P",
            "S",
            "S"
        ],
        keys: { "P": BLOCK.PLANKS, "S": BLOCK.STICK }
    },
    // --- TOOLS (Stone) ---
    {
        result: { id: BLOCK.STONE_PICKAXE, count: 1 },
        pattern: [
            "CCC",
            " S ",
            " S "
        ],
        keys: { "C": BLOCK.STONE, "S": BLOCK.STICK } // Using Stone (ID 3), Cobblestone usually but we have Stone
    },
    {
        result: { id: BLOCK.STONE_AXE, count: 1 },
        pattern: [
            "CC",
            "CS",
            " S"
        ],
        keys: { "C": BLOCK.STONE, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.STONE_SWORD, count: 1 },
        pattern: [
            "C",
            "C",
            "S"
        ],
        keys: { "C": BLOCK.STONE, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.STONE_SHOVEL, count: 1 },
        pattern: [
            "C",
            "S",
            "S"
        ],
        keys: { "C": BLOCK.STONE, "S": BLOCK.STICK }
    },
    // --- TOOLS (Copper) ---
    {
        result: { id: BLOCK.COPPER_PICKAXE, count: 1 },
        pattern: [
            "III",
            " S ",
            " S "
        ],
        keys: { "I": BLOCK.COPPER_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.COPPER_AXE, count: 1 },
        pattern: [
            "II",
            "IS",
            " S"
        ],
        keys: { "I": BLOCK.COPPER_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.COPPER_SWORD, count: 1 },
        pattern: [
            "I",
            "I",
            "S"
        ],
        keys: { "I": BLOCK.COPPER_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.COPPER_SHOVEL, count: 1 },
        pattern: [
            "I",
            "S",
            "S"
        ],
        keys: { "I": BLOCK.COPPER_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.COPPER_HOE, count: 1 },
        pattern: [
            "II",
            " S",
            " S"
        ],
        keys: { "I": BLOCK.COPPER_INGOT, "S": BLOCK.STICK }
    },
    // --- TOOLS (Iron) ---
    {
        result: { id: BLOCK.IRON_PICKAXE, count: 1 },
        pattern: [
            "III",
            " S ",
            " S "
        ],
        keys: { "I": BLOCK.IRON_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.IRON_AXE, count: 1 },
        pattern: [
            "II",
            "IS",
            " S"
        ],
        keys: { "I": BLOCK.IRON_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.IRON_SWORD, count: 1 },
        pattern: [
            "I",
            "I",
            "S"
        ],
        keys: { "I": BLOCK.IRON_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.IRON_SHOVEL, count: 1 },
        pattern: [
            "I",
            "S",
            "S"
        ],
        keys: { "I": BLOCK.IRON_INGOT, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.IRON_HOE, count: 1 },
        pattern: [
            "II",
            " S",
            " S"
        ],
        keys: { "I": BLOCK.IRON_INGOT, "S": BLOCK.STICK }
    },
    // --- TOOLS (Diamond) ---
    {
        result: { id: BLOCK.DIAMOND_PICKAXE, count: 1 },
        pattern: [
            "DDD",
            " S ",
            " S "
        ],
        keys: { "D": BLOCK.DIAMOND, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.DIAMOND_AXE, count: 1 },
        pattern: [
            "DD",
            "DS",
            " S"
        ],
        keys: { "D": BLOCK.DIAMOND, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.DIAMOND_SWORD, count: 1 },
        pattern: [
            "D",
            "D",
            "S"
        ],
        keys: { "D": BLOCK.DIAMOND, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.DIAMOND_SHOVEL, count: 1 },
        pattern: [
            "D",
            "S",
            "S"
        ],
        keys: { "D": BLOCK.DIAMOND, "S": BLOCK.STICK }
    },
    {
        result: { id: BLOCK.DIAMOND_HOE, count: 1 },
        pattern: [
            "DD",
            " S",
            " S"
        ],
        keys: { "D": BLOCK.DIAMOND, "S": BLOCK.STICK }
    },
    // --- New Blocks ---
    {
        result: { id: BLOCK.CHEST, count: 1 },
        pattern: [
            "PPP",
            "P P",
            "PPP"
        ],
        keys: { "P": BLOCK.PLANKS }
    },
    {
        result: { id: BLOCK.FURNACE, count: 1 },
        pattern: [
            "SSS",
            "S S",
            "SSS"
        ],
        keys: { "S": BLOCK.STONE }
    },
    {
        result: { id: BLOCK.LADDER, count: 3 },
        pattern: [
            "S S",
            "SSS",
            "S S"
        ],
        keys: { "S": BLOCK.STICK }
    },
    // --- Smelting Recipes (in furnace) ---
    {
        result: { id: BLOCK.IRON_INGOT, count: 1 },
        ingredients: [{ id: BLOCK.IRON_ORE, count: 1 }, { id: BLOCK.COAL, count: 1 }]
    },
    {
        result: { id: BLOCK.COPPER_INGOT, count: 1 },
        ingredients: [{ id: BLOCK.COPPER_ORE, count: 1 }, { id: BLOCK.COAL, count: 1 }]
    },
    {
        result: { id: BLOCK.COBBLESTONE, count: 1 },
        ingredients: [{ id: BLOCK.STONE, count: 1 }, { id: BLOCK.COAL, count: 1 }]
    }
];
