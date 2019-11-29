# Webcams knowledge base

1. Item categories, specification and filtering:
- each item belongs to one category and to one category subtype
- each category has only 1 subtype array. No further nesting
- subtype filter is always the first filter in the filter array for each category
- item specifications at least must fully cover its category filters
- filtering items supports paging and includes: categoryId, subtypeId, price range, specifications
