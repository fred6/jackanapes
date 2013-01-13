include_dir = build
title = 'Notes on Combinatorial Optimization'

html:
	pandoc -s tsp.md -t html5 -o index.html \
		    --include-in-header $(include_dir)/header.html \
		    --include-before-body $(include_dir)/cover.html \
		    --include-after-body $(include_dir)/footer.html \
		    --title-prefix $(title) \
			--smart \
			--mathjax
