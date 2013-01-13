include_dir = eucalg/build
title = 'Euclidean algorithm, visualized'

html:
	pandoc -s eucalg.md -t html5 -o eucalg.html \
		    --include-in-header $(include_dir)/header.html \
		    --include-before-body $(include_dir)/cover.html \
		    --include-after-body $(include_dir)/footer.html \
		    --title-prefix $(title) \
			--smart

	pandoc -s index.md -t html5 -o index.html \
			--smart
