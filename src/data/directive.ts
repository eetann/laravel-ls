import {
	type CompletionItem,
	CompletionItemKind,
	InsertTextFormat,
} from "vscode-languageserver";

// ref: https://laravel.com/docs/11.x/blade#displaying-data
export const bladeDirective: CompletionItem[] = [
	{
		label: "@break",
		kind: CompletionItemKind.Function,
		detail: "Break the statement",
		documentation: "",
	},
	{
		label: "@continue",
		kind: CompletionItemKind.Function,
		detail: "Continues the loop iteration",
		documentation: "",
	},
	{
		label: "@continue",
		kind: CompletionItemKind.Snippet,
		detail: "@continue",
		documentation: "```blade\n@continue\n```",
		insertText: "@continue",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@verbatim",
		kind: CompletionItemKind.Function,
		detail: "Begin verbatim directive",
		documentation:
			"Start a block of code that will be output as-is, without Blade parsing.",
	},
	{
		label: "@endverbatim",
		kind: CompletionItemKind.Function,
		detail: "End verbatim directive",
		documentation:
			"End a block of code that will be output as-is, without Blade parsing.",
	},
	{
		label: "@verbatim",
		kind: CompletionItemKind.Snippet,
		detail: "@verbatim ~ @endverbatim",
		documentation: "@verbatim\n    ${1}\n@endverbatim",
		insertText: "@verbatim\n    ${1}\n@endverbatim",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@if",
		kind: CompletionItemKind.Function,
		detail: "Begin if directive",
		documentation: "Start an if statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Function,
		detail: "Begin elseif directive",
		documentation: "Start an elseif statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@else",
		kind: CompletionItemKind.Function,
		detail: "Begin else directive",
		documentation: "Start an else statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@endif",
		kind: CompletionItemKind.Function,
		detail: "End if directive",
		documentation: "End an if statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@if",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @endif",
		documentation: "@if (${1:condition})\n    ${2}\n@endif",
		insertText: "@if (${1:condition})\n    ${2}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @elseif ~ @endif",
		documentation:
			"@if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		insertText:
			"@if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Function,
		detail: "Begin unless directive",
		documentation: "Start an unless statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@endunless",
		kind: CompletionItemKind.Function,
		detail: "End unless directive",
		documentation: "End an unless statement.",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Snippet,
		detail: "@unless ~ @endunless",
		documentation: "@unless (${1:condition})\n    ${2}\n@endunless",
		insertText: "@unless (${1:condition})\n    ${2}\n@endunless",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@isset",
		kind: CompletionItemKind.Function,
		detail: "Begin isset directive",
		documentation: "Check if a variable exists and is not null.",
		insertText: "@isset(${1:variable})\n    ${2}\n@endisset",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endisset",
		kind: CompletionItemKind.Function,
		detail: "End isset directive",
		documentation: "End the isset directive.",
		insertText: "@endisset",
	},
	{
		label: "@isset",
		kind: CompletionItemKind.Snippet,
		detail: "@isset ~ @endisset",
		documentation: "Check if a variable exists and is not null.",
		insertText: "@isset(${1:variable})\n    ${2}\n@endisset",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Function,
		detail: "Begin empty directive",
		documentation:
			"Start a block of code that will be executed if the variable is empty.",
	},
	{
		label: "@endempty",
		kind: CompletionItemKind.Function,
		detail: "End empty directive",
		documentation:
			"End a block of code that will be executed if the variable is empty.",
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Snippet,
		detail: "@empty ~ @endempty",
		documentation: "@empty\n    ${1}\n@endempty",
		insertText: "@empty\n    ${1}\n@endempty",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Function,
		detail: "Begin auth directive",
		documentation:
			"Start a block of code that will be output only when the user is authenticated.",
	},
	{
		label: "@endauth",
		kind: CompletionItemKind.Function,
		detail: "End auth directive",
		documentation:
			"End a block of code that will be output only when the user is authenticated.",
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Snippet,
		detail: "@auth ~ @endauth",
		documentation: "@auth\n    ${1}\n@endauth",
		insertText: "@auth\n    ${1}\n@endauth",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Function,
		detail: "Begin guest directive",
		documentation:
			"Start a block of code that will be output only when the user is not authenticated.",
	},
	{
		label: "@endguest",
		kind: CompletionItemKind.Function,
		detail: "End guest directive",
		documentation:
			"End a block of code that will be output only when the user is not authenticated.",
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Snippet,
		detail: "@guest ~ @endguest",
		documentation: "@guest\n    ${1}\n@endguest",
		insertText: "@guest\n    ${1}\n@endguest",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@production",
		kind: CompletionItemKind.Function,
		detail: "Output the content of the block only in production environments",
		documentation:
			"This directive outputs the content of the block only in production environments.",
	},
	{
		label: "@endproduction",
		kind: CompletionItemKind.Function,
		detail: "End production directive",
		documentation: "Ends the production directive.",
	},
	{
		label: "@production",
		kind: CompletionItemKind.Snippet,
		detail: "@production ~ @endproduction",
		documentation: "@production\n    ${1}\n@endproduction",
		insertText: "@production\n    ${1}\n@endproduction",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@env",
		kind: CompletionItemKind.Function,
		detail: "Output the value of an environment variable",
		documentation: "",
	},
	{
		label: "@endenv",
		kind: CompletionItemKind.Function,
		detail: "Ends the env directive",
		documentation: "",
	},
	{
		label: "@env",
		kind: CompletionItemKind.Snippet,
		detail: "@env('value') ~ @endenv",
		documentation: "```blade\n@env('${1}')\n    ${2}\n@endenv\n```",
		insertText: "@env('${1}')\n    ${2}\n@endenv",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Function,
		detail: "Check if the given section exists in the configuration file.",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Snippet,
		detail: "@hasSection('section') ~ @endhasSection",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		insertText: "@hasSection('${1}')\n    ${2}\n@endhasSection",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endhasSection",
		kind: CompletionItemKind.Function,
		detail: "Ends the hasSection directive",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		insertText: "@endhasSection",
	},
	{
		label: "@sectionMissing",
		kind: CompletionItemKind.Function,
		detail: "Define a section with default content",
		documentation: "",
	},
	{
		label: "@sectionMissing",
		kind: CompletionItemKind.Snippet,
		detail: "Define a section with default content",
		documentation:
			"@sectionMissing('navigation')\n    <div class='pull-right'>\n        @include('default-navigation')\n    </div>\n@endif",
		insertText: "@sectionMissing('${1}', '${2}')\n    ${3}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@session",
		kind: CompletionItemKind.Function,
		detail: "Retrieve a session value",
		documentation: "",
	},
	{
		label: "@endsession",
		kind: CompletionItemKind.Function,
		detail: "Ends the session directive",
		documentation: "",
	},
	{
		label: "@session",
		kind: CompletionItemKind.Snippet,
		detail: "@session('key') ~ @endsession",
		documentation: "@session('${1}')\n    ${2}\n@endsession",
		insertText: "@session('${1}')\n    ${2}\n@endsession",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@switch",
		kind: CompletionItemKind.Function,
		detail: "Start a switch statement",
		documentation: "",
	},
	{
		label: "@endswitch",
		kind: CompletionItemKind.Function,
		detail: "Ends the switch statement",
		documentation: "",
	},
	{
		label: "@switch",
		kind: CompletionItemKind.Snippet,
		detail: "@switch($expression) ~ @endswitch",
		documentation:
			"```blade\n@switch($expression)\n    @case(${1})\n        ${2}\n        @break\n    @default\n        ${3}\n@endswitch\n```",
		insertText:
			"@switch(${1})\n    @case(${2})\n        ${3}\n        @break\n    @default\n        ${4}\n@endswitch",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@case",
		kind: CompletionItemKind.Function,
		detail: "case the switch statement",
		documentation: "",
	},
	{
		label: "@default",
		kind: CompletionItemKind.Function,
		detail: "Default the switch statement",
		documentation: "",
	},
	{
		label: "@for",
		kind: CompletionItemKind.Function,
		detail: "Loop over a given collection",
		documentation: "",
	},
	{
		label: "@endfor",
		kind: CompletionItemKind.Function,
		detail: "Ends the for directive",
		documentation: "",
	},
	{
		label: "@for",
		kind: CompletionItemKind.Snippet,
		detail: "@for($loop, $item in $collection) ~ @endfor",
		documentation:
			"```blade\n@for($i = 0; $i < 10; $i++)\n    {{ $i }}\n@endfor\n```",
		insertText:
			"@for(${1:$i = 0}; ${2:$i < 10}; ${3:$i++})\n    ${2: {{ $i }}}\n@endfor",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@foreach",
		kind: CompletionItemKind.Function,
		detail: "Loop over a collection",
		documentation: "",
	},
	{
		label: "@endforeach",
		kind: CompletionItemKind.Function,
		detail: "Ends the foreach directive",
		documentation: "",
	},
	{
		label: "@foreach",
		kind: CompletionItemKind.Snippet,
		detail: "@foreach($items as $item) ~ @endforeach",
		documentation:
			"```blade\n@foreach(${1:items} as ${2:item})\n    ${3}\n@endforeach\n```",
		insertText: "@foreach(${1:items} as ${2:item})\n    ${3}\n@endforeach",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@forelse",
		kind: CompletionItemKind.Function,
		detail: "Loop over a collection of items",
		documentation: "",
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Function,
		detail: "Display content if the collection is empty",
		documentation: "",
	},
	{
		label: "@endforelse",
		kind: CompletionItemKind.Function,
		detail: "Ends the forelse directive",
		documentation: "",
	},
	{
		label: "@forelse",
		kind: CompletionItemKind.Snippet,
		detail: "@forelse($collection as $item) ~ @empty ~ @endforelse",
		documentation:
			"```blade\n@forelse($collection as $item)\n    ${1}\n@empty\n    ${2}\n@endforelse\n```",
		insertText:
			"@forelse($collection as $item)\n    ${1}\n@empty\n    ${2}\n@endforelse",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@while",
		kind: CompletionItemKind.Function,
		detail: "Loop through a given condition",
		documentation: "",
	},
	{
		label: "@endwhile",
		kind: CompletionItemKind.Function,
		detail: "Ends the while directive",
		documentation: "",
	},
	{
		label: "@while",
		kind: CompletionItemKind.Snippet,
		detail: "@while(condition) ~ @endwhile",
		documentation: "```blade\n@while(${1})\n    ${2}\n@endwhile\n```",
		insertText: "@while(${1})\n    ${2}\n@endwhile",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@php",
		kind: CompletionItemKind.Function,
		detail: "Inline PHP code",
		documentation: "",
	},
	{
		label: "@endphp",
		kind: CompletionItemKind.Function,
		detail: "Ends the PHP directive",
		documentation: "",
	},
	{
		label: "@php",
		kind: CompletionItemKind.Snippet,
		detail: "@php ~ @endphp",
		documentation: "```blade\n@php\n    ${1}\n@endphp\n```",
		insertText: "@php\n    ${1}\n@endphp",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	// ディレクティブ以外を別ファイルに作る
	// ループ内の時$loop
];

// TODO: 条件付き
const classDirective: CompletionItem[] = [
	{
		label: "@class",
		kind: CompletionItemKind.Function,
		detail: "Add a CSS class to an element",
		documentation: "",
	},
	{
		label: "@endclass",
		kind: CompletionItemKind.Function,
		detail: "Ends the class directive",
		documentation: "",
	},
	{
		label: "@class",
		kind: CompletionItemKind.Snippet,
		detail: "@class(['class1', 'class2'])",
		documentation: "```blade\n@class([$1])\n```",
		insertText: "@class([$1])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@style",
		kind: CompletionItemKind.Function,
		detail: "Output inline CSS styles",
		documentation: "",
	},
	{
		label: "@style",
		kind: CompletionItemKind.Snippet,
		detail: "@style([$1])",
		documentation: "```blade\n@style([$1])\n```",
		insertText: "@style([$1])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	// https://laravel.com/docs/11.x/blade#additional-attributes
	{
		label: "@checked",
		kind: CompletionItemKind.Function,
		detail: "Check if a value is true",
		documentation: "",
	},
	{
		label: "@checked",
		kind: CompletionItemKind.Snippet,
		detail: "@checked(value)",
		documentation: "```blade\n@checked(${1})\n```",
		insertText: "@checked(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
];