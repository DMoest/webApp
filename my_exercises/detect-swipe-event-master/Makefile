#
	
#
# The fileset
#
JS_FILES 	= $(filter-out %.min.js, $(wildcard *.js))
JS_MINIFIED = $(JS_FILES:.js=.min.js)



#
# Tool to check and minimize javascript code
#
JS_CODESTYLE 			= jscs
JS_CODESTYLE_OPTIONS 	=

JS_LINT 				= jshint
JS_LINT_OPTIONS 		=

JS_MINIFY 			= uglifyjs
JS_MINIFY_OPTIONS 	= --mangle --compress --screw-ie8 --comments



# ------------------------------------------------------------------------
#
# General and combined targets
#

# target: all - Default target, run tests and build
all: test build


# target: test - Do all tests
test: js-cs js-lint



# target: build - Do all build
build: js-minify



# target: clean - Removes generated files and directories.
clean:
	@echo "Target clean not implemented."
	#rm -f $(CSS_MINIFIED) $(JS_MINIFIED)



# target: help - Displays help.
help:
	@echo "make [target] ..."
	@echo "target:"
	@egrep "^# target:" Makefile | sed 's/# target: / /g'



# ------------------------------------------------------------------------
#
# JavaScript
#
.PHONY: js-cs js-lint 

# target: js-minify - Minify JavaScript files to min.js
js-minify: $(JS_FILES) $(JS_MINIFIED)

%.min.js: %.js
	@echo '==> Minifying $<'
	$(JS_MINIFY) $(JS_MINIFY_OPTIONS) --output $@  $<



# target: js-cs - Check codestyle in javascript files
js-cs:
	@for file in $(JS_FILES); do \
		echo "==> JavaScript codestyle $$file"; \
		$(JS_CODESTYLE) $(JS_CODESTYLE_OPTIONS) $$file; \
	done



# target: js-lint - Lint javascript files
js-lint:
	@for file in $(JS_FILES); do \
		echo "==> JavaScript lint $$file"; \
		$(JS_LINT) $(JS_LINT_OPTIONS) $$file; \
	done
	@echo
