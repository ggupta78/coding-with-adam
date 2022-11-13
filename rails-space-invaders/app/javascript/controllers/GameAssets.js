const GameAssets = {
  backgroundImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3euO5EQMgNHO+z90UEZCXLSrbGbsuMo+/XeaSvk4wCdYluPz+ZwfHwIECBAgQIAAgTCBQ2CFWTqIAAECBAgQIPAlILC8CAQIECBAgACBYAGBFQzqOAIECBAgQICAwPIOECBAgAABAgSCBQRWMKjjCBAgQIAAAQICyztAgAABAgQIEAgWEFjBoI4jQIAAAQIECAgs7wABAgQIECBAIFhAYAWDOo4AAQIECBAgILC8AwQIECBAgACBYAGBFQzqOAIECBAgQICAwPIOECBAgAABAgSCBQRWMKjjCBAgQIAAAQICyztAgAABAgQIEAgWEFjBoI4jQIAAAQIECAgs7wABAgQIECBAIFhAYAWDOo4AAQIECBAgILC8AwQIECBAgACBYAGBFQzqOAIECBAgQICAwPIOECBAgAABAgSCBQRWMKjjCBAgQIAAAQICyztAgAABAgQIEAgWEFjBoI4jQIAAAQIECAgs7wABAgQIECBAIFhAYAWDOo4AAQIECBAgILC8AwQIECBAgACBYAGBFQzqOAIECBAgQICAwPIOECBAgAABAgSCBQRWMKjjCBAgQIAAAQICyztAgAABAl8C53l+juP624IPAQI/FRBYPxX0xxMgQIAAAQIE/icgsLwSBAgQIECAAIFgAYEVDOo4AgQIECBAgIDA8g4QIECAAAECBIIFBFYwqOP6C1y/EPj6+MXA/XdtQgIECHxXQGB9V84fR4AAAQIECBD4jYDA8moQIECAAAECXwJ+q464F0FgxVk6iQABAgQIECDwJZASWArY20WAAAECBAhMFkgJrMmgZidAgAABAgQICCzvAAECBAgQIEAgWEBgBYM6jgABAgQIECAgsLwDBAgQIECAAIFgAYEVDOo4AgQIECBAgIDA8g4QIECAAAECBIIFBFYwqOMIECBAgAABAgLLO0CAAAECBAgQCBYQWMGgjiNAgAABAgQICCzvAAECBAgQIEAgWEBgBYM6jgABAgQIECAgsLwDBAgQIECAAIFgAYEVDOo4AgQIECBAgIDA8g4QIECAAAECBIIFBFYwqOMIECBAgAABAgLLO0CAAAECqQLneX6dfxzX33J8CMwQEFgz9mxKAgQIECBA4EUBgfUitkcR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'
};

export default GameAssets;
