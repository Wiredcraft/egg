SCSS = $(wildcard docs/**/*.scss)
CSS = $(wildcard docs/**/*.css)

.PHONY: all clean

all: $(CSS)

$(CSS): $(SCSS)
	sass --sourcemap=none --style compressed $<:$@

clean:
	rm -f $(CSS)
