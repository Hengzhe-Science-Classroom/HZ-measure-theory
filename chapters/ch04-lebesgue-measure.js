window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: 'Lebesgue Measure on \\(\\mathbb{R}^n\\)',
    subtitle: 'The Canonical Measure: Construction, Properties, and Geometric Meaning',
    sections: [
        // ============================================================
        // Section 1: Construction via Caratheodory
        // ============================================================
        {
            id: 'construction-via-caratheodory',
            title: 'Construction via Carath\u00e9odory',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From abstract machinery to the concrete.</strong> In Chapter 3 we built Carath\u00e9odory's extension theorem: start with a premeasure on an algebra, extend to an outer measure, and restrict to measurable sets. We now apply this machinery to the most important example in all of analysis: <em>Lebesgue measure</em> on \\(\\mathbb{R}^n\\). The result is a measure that assigns to every "reasonable" subset of \\(\\mathbb{R}^n\\) a notion of \\(n\\)-dimensional volume that perfectly matches our geometric intuition.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Construct Lebesgue measure on \\(\\mathbb{R}^n\\) by applying Carath\u00e9odory's theorem to the volume premeasure on rectangles. Verify the premeasure axioms, define Lebesgue outer measure, and identify the resulting \\(\\sigma\\)-algebra of Lebesgue-measurable sets.</p>
                </div>

                <h2>The Starting Point: Rectangles and Volume</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Rectangles?)</div>
                    <div class="env-body">
                        <p>Picture the plane \\(\\mathbb{R}^2\\). The simplest sets whose area we know without hesitation are axis-aligned rectangles. A rectangle \\([a_1, b_1] \\times [a_2, b_2]\\) has area \\((b_1 - a_1)(b_2 - a_2)\\). This is our geometric anchor. The entire construction of Lebesgue measure amounts to saying: <em>start with rectangles, and extend to everything we can reach.</em></p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 (Rectangles in \\(\\mathbb{R}^n\\))</div>
                    <div class="env-body">
                        <p>A <strong>rectangle</strong> (or <strong>box</strong>) in \\(\\mathbb{R}^n\\) is a set of the form</p>
                        \\[R = \\prod_{k=1}^{n} [a_k, b_k) = [a_1, b_1) \\times [a_2, b_2) \\times \\cdots \\times [a_n, b_n)\\]
                        <p>where \\(a_k \\leq b_k\\) for each \\(k\\). We use half-open intervals (closed on the left, open on the right) so that \\(\\mathbb{R}^n\\) is partitioned by any grid of rectangles without overlap. The <strong>volume</strong> of \\(R\\) is</p>
                        \\[\\operatorname{vol}(R) = \\prod_{k=1}^{n} (b_k - a_k).\\]
                        <p>We set \\(\\operatorname{vol}(\\emptyset) = 0\\). A rectangle is <strong>degenerate</strong> if \\(a_k = b_k\\) for some \\(k\\), in which case \\(\\operatorname{vol}(R) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Half-Open?)</div>
                    <div class="env-body">
                        <p>The choice of half-open intervals is a technical convenience: finite disjoint unions of half-open rectangles form an <strong>algebra</strong> (closed under complement and finite union). Closed rectangles do not enjoy this property because the complement of a closed rectangle is not a finite union of closed rectangles.</p>
                    </div>
                </div>

                <h2>The Algebra of Elementary Sets</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.2 (The Elementary Algebra)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{A}_n\\) denote the collection of all finite disjoint unions of half-open rectangles in \\(\\mathbb{R}^n\\) (including \\(\\emptyset\\)). Then \\(\\mathcal{A}_n\\) is an <strong>algebra</strong> of subsets of \\(\\mathbb{R}^n\\), closed under finite unions, finite intersections, and complements.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Pixel Art)</div>
                    <div class="env-body">
                        <p>Think of elementary sets as "pixel art" for subsets of \\(\\mathbb{R}^n\\). Every elementary set is a finite collection of rectangles patched together. The volume is computed by adding up the individual pixel areas. This is our premeasure, and the challenge is to extend it consistently to all the complicated sets that lie beyond finite unions of rectangles.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.3 (Volume Premeasure)</div>
                    <div class="env-body">
                        <p>The <strong>volume premeasure</strong> is the function \\(\\mu_0: \\mathcal{A}_n \\to [0, \\infty]\\) defined by</p>
                        \\[\\mu_0\\!\\left(\\bigsqcup_{j=1}^{m} R_j\\right) = \\sum_{j=1}^{m} \\operatorname{vol}(R_j)\\]
                        <p>for any finite disjoint union of rectangles \\(R_1, \\ldots, R_m\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.4 (\\(\\mu_0\\) Is a Premeasure)</div>
                    <div class="env-body">
                        <p>The volume function \\(\\mu_0\\) is a premeasure on the algebra \\(\\mathcal{A}_n\\). That is, if \\(A = \\bigsqcup_{j=1}^{\\infty} A_j\\) where each \\(A_j \\in \\mathcal{A}_n\\) and \\(A \\in \\mathcal{A}_n\\), then</p>
                        \\[\\mu_0(A) = \\sum_{j=1}^{\\infty} \\mu_0(A_j).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>We outline the argument for \\(n = 1\\); the general case follows by Fubini-type iteration.</p>
                        <p><strong>Step 1 (\\(\\geq\\)):</strong> Finite additivity gives \\(\\mu_0(A) \\geq \\sum_{j=1}^{N} \\mu_0(A_j)\\) for all \\(N\\). Letting \\(N \\to \\infty\\) yields \\(\\mu_0(A) \\geq \\sum_{j=1}^{\\infty} \\mu_0(A_j)\\).</p>
                        <p><strong>Step 2 (\\(\\leq\\)):</strong> For \\(\\varepsilon &gt; 0\\), slightly enlarge each \\(A_j\\) to an open interval \\(U_j\\) with \\(|U_j| \\leq \\mu_0(A_j) + \\varepsilon/2^j\\). The closure \\(\\overline{A}\\) is compact (if \\(A\\) is bounded; the unbounded case reduces to this), so the Heine-Borel theorem extracts a finite subcover. Summing gives \\(\\mu_0(A) \\leq \\sum_{j=1}^{\\infty} \\mu_0(A_j) + 2\\varepsilon\\). Since \\(\\varepsilon\\) was arbitrary, the result follows.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Lebesgue Outer Measure</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.5 (Lebesgue Outer Measure)</div>
                    <div class="env-body">
                        <p>For any \\(E \\subseteq \\mathbb{R}^n\\), the <strong>Lebesgue outer measure</strong> is</p>
                        \\[\\lambda^*(E) = \\inf\\!\\left\\{\\sum_{j=1}^{\\infty} \\operatorname{vol}(R_j) : E \\subseteq \\bigcup_{j=1}^{\\infty} R_j,\\; R_j \\text{ rectangles}\\right\\}.\\]
                        <p>We cover \\(E\\) by countably many rectangles and take the infimum of the total volume over all such coverings. This is the infimum-cover construction of Chapter 3 (Definition 3.3) applied to the volume premeasure.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Geometric Picture of Outer Measure)</div>
                    <div class="env-body">
                        <p>Imagine wrapping a set \\(A\\) in a blanket made of rectangles. The outer measure asks: <em>what is the least amount of fabric you need?</em> You are allowed to use infinitely many rectangular patches, and they may overlap (overlaps are counted multiply in the sum). The infimum over all such wrappings is the tightest fit you can achieve from the outside.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 4.6 (Basic Properties of Outer Measure)</div>
                    <div class="env-body">
                        <p>The Lebesgue outer measure satisfies:</p>
                        <ol>
                            <li>\\(\\lambda^*(\\emptyset) = 0\\).</li>
                            <li>(Monotonicity) \\(A \\subseteq B \\implies \\lambda^*(A) \\leq \\lambda^*(B)\\).</li>
                            <li>(Countable subadditivity) \\(\\lambda^*\\!\\left(\\bigcup_{k=1}^{\\infty} A_k\\right) \\leq \\sum_{k=1}^{\\infty} \\lambda^*(A_k)\\).</li>
                            <li>(Agreement with volume) For any rectangle \\(R\\), \\(\\lambda^*(R) = \\operatorname{vol}(R)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Property 4 Is Not Obvious!)</div>
                    <div class="env-body">
                        <p>The outer measure is defined as an infimum over coverings. Why cannot we cover a rectangle \\(R\\) with smaller rectangles whose total volume is strictly less than \\(\\operatorname{vol}(R)\\)? This requires Theorem 4.4, specifically the countable subadditivity established via Heine-Borel. Without compactness, this property can fail.</p>
                    </div>
                </div>

                <h2>Applying Carath\u00e9odory: The Lebesgue \\(\\sigma\\)-Algebra</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.6 (Lebesgue Measurability)</div>
                    <div class="env-body">
                        <p>A set \\(E \\subseteq \\mathbb{R}^n\\) is <strong>Lebesgue measurable</strong> if it satisfies the Carath\u00e9odory criterion: for every set \\(A \\subseteq \\mathbb{R}^n\\),</p>
                        \\[m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c).\\]
                        <p>The collection \\(\\mathcal{L}^n\\) of all Lebesgue-measurable sets is a \\(\\sigma\\)-algebra, and the restriction \\(m = m^*|_{\\mathcal{L}^n}\\) is a complete measure called <strong>Lebesgue measure</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Geometric Test)</div>
                    <div class="env-body">
                        <p>Think of \\(E\\) as a cookie cutter. The Carath\u00e9odory condition says: no matter what dough \\(A\\) you press \\(E\\) into, the outer measure of the inside piece plus the outer measure of the outside piece equals the outer measure of the whole. The set \\(E\\) "cuts cleanly" with respect to outer measure. Sets that fail this test are the non-measurable monsters.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.7 (Existence of Lebesgue Measure)</div>
                    <div class="env-body">
                        <p>There exists a unique complete measure \\(m\\) on \\((\\mathbb{R}^n, \\mathcal{L}^n)\\) such that:</p>
                        <ol>
                            <li>\\(m(R) = \\operatorname{vol}(R)\\) for every rectangle \\(R\\).</li>
                            <li>\\(\\mathcal{L}^n\\) contains the Borel \\(\\sigma\\)-algebra \\(\\mathcal{B}(\\mathbb{R}^n)\\).</li>
                            <li>\\(m\\) is complete: if \\(m(N) = 0\\) and \\(E \\subseteq N\\), then \\(E \\in \\mathcal{L}^n\\).</li>
                        </ol>
                        <p>This measure is the <strong>Lebesgue measure</strong> on \\(\\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Proposition 4.3, \\(\\operatorname{vol}\\) is a premeasure on the algebra \\(\\mathcal{E}\\). By Carath\u00e9odory's extension theorem (Chapter 3, Theorem 3.X), the induced outer measure \\(m^*\\) restricts to a complete measure on the \\(\\sigma\\)-algebra of Carath\u00e9odory-measurable sets. This \\(\\sigma\\)-algebra contains \\(\\mathcal{E}\\) and hence the Borel \\(\\sigma\\)-algebra \\(\\sigma(\\mathcal{E}) \\supseteq \\mathcal{B}(\\mathbb{R}^n)\\). Completeness follows because \\(m^*\\) assigns zero to subsets of measure-zero sets, and these satisfy the Carath\u00e9odory criterion trivially.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-approx-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 1.4; Stein-Shakarchi III.1; Royden-Fitzpatrick 2.2.</p>
            `,
            visualizations: [
                {
                    id: 'lebesgue-approx-viz',
                    title: 'Lebesgue Measure Approximation',
                    description: 'Approximate a 2D set from the outside by rectangle covers: watch the total area converge to the Lebesgue measure as the grid refines.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var gridN = 8;
                        var shapeType = 0;

                        var shapes = [
                            { name: 'Disk', test: function(x, y) { return x*x + y*y <= 1; }, area: Math.PI },
                            { name: 'Ellipse', test: function(x, y) { return x*x/4 + y*y <= 1; }, area: 2 * Math.PI },
                            { name: 'Diamond', test: function(x, y) { return Math.abs(x) + Math.abs(y) <= 1.5; }, area: 4.5 },
                            { name: 'Star', test: function(x, y) {
                                var r = Math.sqrt(x*x + y*y);
                                var theta = Math.atan2(y, x);
                                return r <= 1.2 + 0.4 * Math.cos(5 * theta);
                            }, area: Math.PI * 1.2 * 1.2 + Math.PI * 0.4 * 0.4 / 2 }
                        ];

                        VizEngine.createSlider(controls, 'Grid resolution', 2, 50, gridN, 1, function(v) {
                            gridN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Next Shape', function() {
                            shapeType = (shapeType + 1) % shapes.length;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var shape = shapes[shapeType];
                            var margin = 60;
                            var plotSize = Math.min(w - 2 * margin, h - 80);
                            var cx = w / 2, cy = 45 + plotSize / 2;
                            var scale = plotSize / 5;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Outer Measure Approximation: ' + shape.name, w / 2, 20);

                            // Grid lines
                            var step = 5.0 / gridN;
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var i = 0; i <= gridN; i++) {
                                var coord = -2.5 + i * step;
                                var sx = cx + coord * scale;
                                var sy = cy - coord * scale;
                                ctx.beginPath(); ctx.moveTo(sx, cy - 2.5 * scale); ctx.lineTo(sx, cy + 2.5 * scale); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(cx - 2.5 * scale, sy); ctx.lineTo(cx + 2.5 * scale, sy); ctx.stroke();
                            }

                            // Draw covering rectangles and the shape
                            var coverArea = 0;
                            var insideArea = 0;
                            for (var i = 0; i < gridN; i++) {
                                for (var j = 0; j < gridN; j++) {
                                    var x0 = -2.5 + i * step;
                                    var y0 = -2.5 + j * step;
                                    var x1 = x0 + step;
                                    var y1 = y0 + step;

                                    // Check if any corner or center is in shape (outer cover)
                                    var corners = [
                                        [x0, y0], [x1, y0], [x0, y1], [x1, y1],
                                        [(x0+x1)/2, (y0+y1)/2]
                                    ];
                                    var anyIn = false;
                                    var allIn = true;
                                    for (var c = 0; c < corners.length; c++) {
                                        if (shape.test(corners[c][0], corners[c][1])) anyIn = true;
                                        else allIn = false;
                                    }
                                    // Also sample more points for accuracy
                                    var samplePts = [[x0 + step*0.25, y0 + step*0.25],
                                                     [x0 + step*0.75, y0 + step*0.25],
                                                     [x0 + step*0.25, y0 + step*0.75],
                                                     [x0 + step*0.75, y0 + step*0.75]];
                                    for (var c = 0; c < samplePts.length; c++) {
                                        if (shape.test(samplePts[c][0], samplePts[c][1])) anyIn = true;
                                        else allIn = false;
                                    }

                                    var sx0 = cx + x0 * scale;
                                    var sy0 = cy - y1 * scale;
                                    var sw = step * scale;
                                    var sh = step * scale;

                                    if (anyIn) {
                                        coverArea += step * step;
                                        if (allIn) {
                                            insideArea += step * step;
                                            ctx.fillStyle = 'rgba(63, 185, 160, 0.35)';
                                        } else {
                                            ctx.fillStyle = 'rgba(240, 136, 62, 0.25)';
                                        }
                                        ctx.fillRect(sx0, sy0, sw, sh);
                                        ctx.strokeStyle = allIn ? colors.teal + '66' : colors.orange + '44';
                                        ctx.lineWidth = 0.5;
                                        ctx.strokeRect(sx0, sy0, sw, sh);
                                    }
                                }
                            }

                            // Draw shape outline
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var t = 0; t <= 360; t++) {
                                var theta = t * Math.PI / 180;
                                // trace boundary for each shape
                                var r;
                                if (shapeType === 0) r = 1;
                                else if (shapeType === 1) {
                                    var cc = Math.cos(theta), ss = Math.sin(theta);
                                    r = 1 / Math.sqrt(cc*cc/4 + ss*ss);
                                } else if (shapeType === 2) {
                                    var cc = Math.cos(theta), ss = Math.sin(theta);
                                    r = 1.5 / (Math.abs(cc) + Math.abs(ss));
                                } else {
                                    r = 1.2 + 0.4 * Math.cos(5 * theta);
                                }
                                var px = cx + r * Math.cos(theta) * scale;
                                var py = cy - r * Math.sin(theta) * scale;
                                if (t === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Info text
                            var infoY = cy + plotSize / 2 + 25;
                            ctx.fillStyle = colors.teal;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Outer cover area: ' + coverArea.toFixed(3) +
                                '   |   Inner area: ' + insideArea.toFixed(3), w / 2, infoY);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Teal = fully inside, Orange = boundary cells (counted in outer cover)', w / 2, infoY + 20);
                            if (typeof shape.area === 'number') {
                                ctx.fillStyle = colors.blue;
                                ctx.fillText('True area \u2248 ' + shape.area.toFixed(3) +
                                    '   |   Gap (outer - inner): ' + (coverArea - insideArea).toFixed(3), w / 2, infoY + 40);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(R = [0, 2] \\times [1, 4] \\times [0, 1]\\) in \\(\\mathbb{R}^3\\). Compute \\(\\operatorname{vol}(R)\\).',
                    hint: 'The volume of a rectangle is the product of the side lengths.',
                    solution: '\\(\\operatorname{vol}(R) = (2-0)(4-1)(1-0) = 2 \\cdot 3 \\cdot 1 = 6\\).'
                },
                {
                    question: 'Prove that \\(m^*(\\{x\\}) = 0\\) for every point \\(x \\in \\mathbb{R}^n\\).',
                    hint: 'Cover \\(\\{x\\}\\) by a single rectangle of side length \\(\\varepsilon\\).',
                    solution: 'For any \\(\\varepsilon > 0\\), the singleton \\(\\{x\\}\\) is contained in a rectangle of side length \\(\\varepsilon\\) in each coordinate, so \\(m^*(\\{x\\}) \\leq \\varepsilon^n\\). Since \\(\\varepsilon\\) is arbitrary, \\(m^*(\\{x\\}) = 0\\).'
                },
                {
                    question: 'Use the Lebesgue Measure Approximation visualization to estimate the area of the unit disk. How does the grid resolution affect the gap between the outer cover area and the inner area?',
                    hint: 'The true area is \\(\\pi \\approx 3.14159\\). Try grid resolutions 5, 10, 20, 40.',
                    solution: 'As the grid refines, both the outer cover area and the inner area converge to \\(\\pi\\). The gap (outer minus inner) shrinks because boundary cells become thinner. At resolution \\(N\\), the boundary has \\(O(N)\\) cells each of area \\(O(1/N^2)\\), so the gap is \\(O(1/N)\\). This is geometric evidence that the disk is Lebesgue measurable.'
                },
                {
                    question: 'Why is the compactness argument (Heine-Borel theorem) essential in proving that the outer measure of a rectangle equals its volume? Give an example showing that without compactness, an analogous statement can fail.',
                    hint: 'Consider the "rationals in \\([0,1]\\)" example: each rational can be covered by a tiny interval, but we need Heine-Borel to conclude that the whole interval cannot be covered for less than its length.',
                    solution: 'Without Heine-Borel, we cannot pass from "every finite subcover has total length at least \\(\\operatorname{vol}(R)\\)" to "every countable cover has total volume at least \\(\\operatorname{vol}(R)\\)." As a counterexample: the rationals \\(\\mathbb{Q} \\cap [0,1]\\) can be covered by intervals of total length \\(\\varepsilon\\) for any \\(\\varepsilon > 0\\) (Heine-Borel does not apply because \\(\\mathbb{Q} \\cap [0,1]\\) is not compact). The key is that \\([0,1]\\) itself is compact, so any open cover has a finite subcover, and finite subadditivity suffices to bound the total volume from below.'
                }
            ]
        },

        // ============================================================
        // Section 2: Basic Properties
        // ============================================================
        {
            id: 'basic-properties',
            title: 'Basic Properties',
            content: `
                <div class="bridge section-bridge">
                    <p>With Lebesgue measure constructed, we now explore the geometric properties that make it special. These are not arbitrary features; they characterize Lebesgue measure uniquely among all measures on \\(\\mathbb{R}^n\\). Think of this section as the "personality profile" of Lebesgue measure: translation invariance, predictable scaling under dilation, and a reflection symmetry that matches our physical intuition about volume.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that Lebesgue measure is translation-invariant, determine how it transforms under dilations and linear maps, and state the uniqueness theorem characterizing Lebesgue measure.</p>
                </div>

                <h2>Translation Invariance</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.8 (Translation Invariance)</div>
                    <div class="env-body">
                        <p>For every Lebesgue-measurable set \\(E \\subseteq \\mathbb{R}^n\\) and every \\(x \\in \\mathbb{R}^n\\), the translate \\(E + x = \\{e + x : e \\in E\\}\\) is Lebesgue measurable and</p>
                        \\[m(E + x) = m(E).\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Sliding Does Not Stretch)</div>
                    <div class="env-body">
                        <p>Imagine a shape cut from paper. Sliding it across a table does not change its area. Translation invariance says exactly this: Lebesgue measure is blind to position and sees only shape and size. This matches the fundamental geometric intuition that volume is a property of the set's "shape," not its location.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>If \\(\\{R_k\\}\\) is a rectangular cover of \\(E\\), then \\(\\{R_k + x\\}\\) is a rectangular cover of \\(E + x\\), and \\(\\operatorname{vol}(R_k + x) = \\operatorname{vol}(R_k)\\). Thus \\(m^*(E + x) \\leq m^*(E)\\). By symmetry (translating \\(E+x\\) back by \\(-x\\)), equality holds. The Carath\u00e9odory condition is preserved under translation, so measurability is preserved as well.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Dilation and Linear Transformations</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.9 (Dilation)</div>
                    <div class="env-body">
                        <p>For any Lebesgue-measurable set \\(E \\subseteq \\mathbb{R}^n\\) and scalar \\(c \\in \\mathbb{R}\\), the dilated set \\(cE = \\{cx : x \\in E\\}\\) satisfies</p>
                        \\[m(cE) = |c|^n \\, m(E).\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Scaling in \\(n\\) Dimensions)</div>
                    <div class="env-body">
                        <p>Double every side of a square: its area quadruples (\\(2^2 = 4\\)). Double every side of a cube: its volume octuples (\\(2^3 = 8\\)). The exponent \\(n\\) is the dimension. The factor \\(|c|^n\\) captures precisely how volume scales with dilation. The absolute value handles reflections (\\(c &lt; 0\\)), which reverse orientation but preserve volume.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.10 (General Linear Maps)</div>
                    <div class="env-body">
                        <p>Let \\(T: \\mathbb{R}^n \\to \\mathbb{R}^n\\) be an invertible linear transformation. For every Lebesgue-measurable set \\(E\\),</p>
                        \\[m(T(E)) = |\\det T| \\cdot m(E).\\]
                        <p>In particular, orthogonal transformations (rotations and reflections) preserve Lebesgue measure since \\(|\\det T| = 1\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Determinant as Volume Magnification)</div>
                    <div class="env-body">
                        <p>The determinant of a linear map measures how it stretches or compresses volumes. A \\(2 \\times 2\\) matrix \\(T\\) sends the unit square to a parallelogram whose area is \\(|\\det T|\\). This is the geometric heart of the change-of-variables formula (Chapter 9). Lebesgue measure "sees" the determinant because it was built from rectangular volumes, and linear maps transform rectangles into parallelepipeds.</p>
                    </div>
                </div>

                <h2>Uniqueness</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.11 (Uniqueness of Lebesgue Measure)</div>
                    <div class="env-body">
                        <p>Lebesgue measure is the <strong>unique</strong> (up to scalar multiples) complete, translation-invariant Borel measure on \\(\\mathbb{R}^n\\) that is finite on compact sets. That is, if \\(\\nu\\) is another translation-invariant Borel measure with \\(\\nu([0,1]^n) = 1\\), then \\(\\nu = m\\) on \\(\\mathcal{B}(\\mathbb{R}^n)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Uniqueness Matters)</div>
                    <div class="env-body">
                        <p>Uniqueness tells us that Lebesgue measure is not one of many possible notions of volume; it is <em>the</em> notion of volume, forced upon us by the requirements of translation invariance and agreement with elementary geometry. Any alternative measure satisfying these natural axioms must be a constant multiple of Lebesgue measure. This is deeply satisfying: our construction via Carath\u00e9odory was just one of many possible paths, but they all lead to the same destination.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="translation-dilation-explorer"></div>

                <p><strong>Reference alignment:</strong> Folland 2.4; Stein-Shakarchi III.3; Royden-Fitzpatrick 2.5.</p>
            `,
            visualizations: [
                {
                    id: 'translation-dilation-explorer',
                    title: 'Translation and Dilation Explorer',
                    description: 'Drag a 2D shape around the plane and adjust a dilation factor. The Lebesgue measure is unchanged under translation and scales by c^2 under dilation.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var dilationFactor = 1.0;
                        var offsetX = 0, offsetY = 0;
                        var dragging = false;
                        var lastMouse = null;
                        var shapeIdx = 0;

                        var shapeNames = ['Triangle', 'Rectangle', 'Ellipse', 'L-shape'];
                        // base area for each shape (at dilation=1)
                        var baseAreas = [1.5, 2.0, Math.PI * 0.8 * 0.6, 1.5];

                        VizEngine.createSlider(controls, 'Dilation factor c', 0.2, 3.0, dilationFactor, 0.05, function(v) {
                            dilationFactor = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Next Shape', function() {
                            shapeIdx = (shapeIdx + 1) % shapeNames.length;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Reset Position', function() {
                            offsetX = 0; offsetY = 0;
                            draw();
                        });

                        canvas.addEventListener('mousedown', function(e) {
                            dragging = true;
                            lastMouse = { x: e.offsetX, y: e.offsetY };
                        });
                        canvas.addEventListener('mousemove', function(e) {
                            if (!dragging) return;
                            offsetX += (e.offsetX - lastMouse.x);
                            offsetY += (e.offsetY - lastMouse.y);
                            lastMouse = { x: e.offsetX, y: e.offsetY };
                            draw();
                        });
                        canvas.addEventListener('mouseup', function() { dragging = false; });
                        canvas.addEventListener('mouseleave', function() { dragging = false; });

                        // Touch support
                        canvas.addEventListener('touchstart', function(e) {
                            e.preventDefault();
                            var t = e.touches[0];
                            var rect = canvas.getBoundingClientRect();
                            dragging = true;
                            lastMouse = { x: t.clientX - rect.left, y: t.clientY - rect.top };
                        }, { passive: false });
                        canvas.addEventListener('touchmove', function(e) {
                            e.preventDefault();
                            if (!dragging) return;
                            var t = e.touches[0];
                            var rect = canvas.getBoundingClientRect();
                            var mx = t.clientX - rect.left, my = t.clientY - rect.top;
                            offsetX += (mx - lastMouse.x);
                            offsetY += (my - lastMouse.y);
                            lastMouse = { x: mx, y: my };
                            draw();
                        }, { passive: false });
                        canvas.addEventListener('touchend', function() { dragging = false; });

                        function drawShape(cx, cy, scale, alpha) {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            ctx.translate(cx, cy);

                            var s = scale * dilationFactor;

                            if (shapeIdx === 0) {
                                // Triangle
                                ctx.fillStyle = colors.teal;
                                ctx.beginPath();
                                ctx.moveTo(0, -s * 60);
                                ctx.lineTo(-s * 50, s * 40);
                                ctx.lineTo(s * 50, s * 40);
                                ctx.closePath();
                                ctx.fill();
                                ctx.strokeStyle = colors.blue;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            } else if (shapeIdx === 1) {
                                // Rectangle
                                ctx.fillStyle = colors.purple + '88';
                                ctx.fillRect(-s * 50, -s * 30, s * 100, s * 60);
                                ctx.strokeStyle = colors.purple;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(-s * 50, -s * 30, s * 100, s * 60);
                            } else if (shapeIdx === 2) {
                                // Ellipse
                                ctx.fillStyle = colors.orange + '66';
                                ctx.beginPath();
                                ctx.ellipse(0, 0, s * 50, s * 35, 0, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            } else {
                                // L-shape
                                ctx.fillStyle = colors.green + '66';
                                ctx.beginPath();
                                ctx.moveTo(-s * 40, -s * 50);
                                ctx.lineTo(s * 10, -s * 50);
                                ctx.lineTo(s * 10, 0);
                                ctx.lineTo(s * 40, 0);
                                ctx.lineTo(s * 40, s * 50);
                                ctx.lineTo(-s * 40, s * 50);
                                ctx.closePath();
                                ctx.fill();
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            }

                            ctx.restore();
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = 0; gx < w; gx += 50) {
                                ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
                            }
                            for (var gy = 0; gy < h; gy += 50) {
                                ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
                            }

                            // Ghost at origin (original position, dilation=1)
                            var ghostDil = dilationFactor;
                            dilationFactor = 1;
                            drawShape(w / 2, h / 2, 1, 0.15);
                            dilationFactor = ghostDil;

                            // Main shape at dragged position
                            drawShape(w / 2 + offsetX, h / 2 + offsetY, 1, 0.7);

                            // Labels
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(shapeNames[shapeIdx] + ': Translation & Dilation Explorer', w / 2, 20);

                            var baseA = baseAreas[shapeIdx];
                            var actualA = baseA * dilationFactor * dilationFactor;

                            ctx.fillStyle = colors.teal;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.fillText('Base area (c=1): ' + baseA.toFixed(3) +
                                '   |   Dilated area (c=' + dilationFactor.toFixed(2) + '): ' +
                                actualA.toFixed(3) +
                                '   |   Ratio: |c|^2 = ' + (dilationFactor * dilationFactor).toFixed(3), w / 2, h - 35);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Drag to translate (area unchanged). Slider to dilate (area scales by c\u00B2).', w / 2, h - 15);

                            // Ghost label
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('(ghost: original at c=1)', w / 2, h / 2 + 80);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that if \\(m(E) = 0\\), then \\(m(E + x) = 0\\) for every \\(x \\in \\mathbb{R}^n\\). Why is this immediate from translation invariance?',
                    hint: 'Translation invariance says \\(m(E+x) = m(E)\\).',
                    solution: 'By Theorem 4.8, \\(m(E + x) = m(E) = 0\\). Measure-zero sets remain measure-zero under translation. This means the "negligible" sets form a translation-invariant collection, which is geometrically natural: a set that is too thin to have volume remains too thin no matter where you place it.'
                },
                {
                    question: 'Let \\(E \\subseteq \\mathbb{R}^2\\) with \\(m(E) = 3\\). What is \\(m(5E)\\)? What about \\(m(-E)\\)?',
                    hint: 'Use the dilation formula \\(m(cE) = |c|^n m(E)\\).',
                    solution: '\\(m(5E) = |5|^2 \\cdot m(E) = 25 \\cdot 3 = 75\\). For the reflection, \\(m(-E) = |-1|^2 \\cdot m(E) = 1 \\cdot 3 = 3\\). Reflection preserves volume.'
                },
                {
                    question: 'Let \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) be the shear map \\(T(x,y) = (x + 2y, y)\\). What is \\(m(T(E))\\) for a measurable set \\(E\\) with \\(m(E) = 7\\)?',
                    hint: 'Compute the determinant of the matrix \\(\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\).',
                    solution: 'The shear map has matrix \\(\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\) with \\(\\det = 1\\). By Theorem 4.10, \\(m(T(E)) = |1| \\cdot 7 = 7\\). Shear transformations preserve area, a fact that is geometrically visible (they slide horizontal strips without stretching them).'
                },
                {
                    question: 'Using the visualization, start with the triangle and increase the dilation factor from 1 to 2. Verify visually that the area quadruples. Then translate the shape far from the origin. Does the displayed area change?',
                    hint: 'Area scales by \\(c^2\\); translation does not change area.',
                    solution: 'When \\(c\\) goes from 1 to 2, the displayed area goes from \\(1.5\\) to \\(1.5 \\times 4 = 6.0\\). Dragging the shape anywhere on the canvas does not change the area readout, confirming translation invariance. This visual demonstration matches the theoretical results: \\(m(cE) = c^2 m(E)\\) and \\(m(E + x) = m(E)\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: Regularity
        // ============================================================
        {
            id: 'regularity',
            title: 'Regularity',
            content: `
                <div class="bridge section-bridge">
                    <p>We now uncover a remarkable structural property of Lebesgue measure: every measurable set can be "sandwiched" between a compact set from inside and an open set from outside, with the gap as small as we please. This is the regularity of Lebesgue measure, and it gives us an extraordinarily powerful tool for converting abstract measure-theoretic statements into concrete geometric approximations.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the inner and outer regularity of Lebesgue measure. Derive the \\(G_\\delta\\)/\\(F_\\sigma\\) characterization of measurable sets and understand the geometric content of regularity.</p>
                </div>

                <h2>Outer Regularity: Approximation from Outside</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.12 (Outer Regularity)</div>
                    <div class="env-body">
                        <p>For every Lebesgue-measurable set \\(E \\subseteq \\mathbb{R}^n\\) and every \\(\\varepsilon &gt; 0\\), there exists an open set \\(U \\supseteq E\\) such that</p>
                        \\[m(U \\setminus E) &lt; \\varepsilon.\\]
                        <p>Equivalently, \\(m(E) = \\inf \\{ m(U) : U \\supseteq E, \\, U \\text{ open} \\}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Shrink-Wrapping from Outside)</div>
                    <div class="env-body">
                        <p>Imagine your set \\(E\\) is an oddly shaped puddle on the floor. Outer regularity says: you can always find a slightly larger puddle \\(U\\) with smooth (open) boundary that covers \\(E\\) and whose excess area beyond \\(E\\) is as small as you wish. No matter how complicated \\(E\\) is, you can "shrink-wrap" it from the outside with open sets to arbitrary precision.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p><strong>Case 1:</strong> \\(m(E) &lt; \\infty\\). By definition of outer measure, there exist rectangles \\(\\{R_k\\}\\) with \\(E \\subseteq \\bigcup R_k\\) and \\(\\sum \\operatorname{vol}(R_k) &lt; m(E) + \\varepsilon/2\\). Enlarge each \\(R_k\\) slightly to an open rectangle \\(U_k \\supseteq R_k\\) with \\(\\operatorname{vol}(U_k) &lt; \\operatorname{vol}(R_k) + \\varepsilon/2^{k+1}\\). Then \\(U = \\bigcup U_k\\) is open, \\(E \\subseteq U\\), and \\(m(U) \\leq \\sum \\operatorname{vol}(U_k) &lt; m(E) + \\varepsilon\\).</p>
                        <p><strong>Case 2:</strong> \\(m(E) = \\infty\\). Write \\(\\mathbb{R}^n = \\bigcup_j B_j\\) where \\(B_j\\) are bounded sets. Apply Case 1 to each \\(E \\cap B_j\\) with tolerance \\(\\varepsilon / 2^j\\), then take the union.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Inner Regularity: Approximation from Inside</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.13 (Inner Regularity)</div>
                    <div class="env-body">
                        <p>For every Lebesgue-measurable set \\(E \\subseteq \\mathbb{R}^n\\) and every \\(\\varepsilon &gt; 0\\), there exists a compact set \\(K \\subseteq E\\) such that</p>
                        \\[m(E \\setminus K) &lt; \\varepsilon.\\]
                        <p>Equivalently, \\(m(E) = \\sup \\{ m(K) : K \\subseteq E, \\, K \\text{ compact} \\}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Filling from Inside)</div>
                    <div class="env-body">
                        <p>Now imagine inflating a balloon inside the puddle \\(E\\). Inner regularity says: you can inflate the balloon (compact set \\(K\\)) until it fills up almost all of \\(E\\), leaving only an \\(\\varepsilon\\)-thin boundary layer uncovered. Compact sets are the "solid core" of Lebesgue-measurable sets.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p><strong>Finite-measure case:</strong> By outer regularity applied to \\(E^c\\), find an open \\(V \\supseteq E^c\\) with \\(m(V \\setminus E^c) &lt; \\varepsilon/2\\). Then \\(F = V^c\\) is closed and \\(F \\subseteq E\\). Intersect \\(F\\) with a large closed ball \\(\\overline{B}(0, R)\\) to get a compact \\(K = F \\cap \\overline{B}(0, R) \\subseteq E\\). For \\(R\\) large enough, \\(m(E \\setminus K) &lt; \\varepsilon\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>The Regularity Sandwich</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.14 (Regularity Sandwich)</div>
                    <div class="env-body">
                        <p>For any Lebesgue-measurable \\(E\\) with \\(m(E) &lt; \\infty\\) and any \\(\\varepsilon &gt; 0\\), there exist a compact set \\(K\\) and an open set \\(U\\) with</p>
                        \\[K \\subseteq E \\subseteq U \\quad \\text{and} \\quad m(U \\setminus K) &lt; \\varepsilon.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The \\(\\varepsilon\\)-Sandwich)</div>
                    <div class="env-body">
                        <p>Every measurable set of finite measure is the "meat" of a sandwich: a compact set (solid bread below) and an open set (bread above), with the total "thickness" (the measure of the gap \\(U \\setminus K\\)) controlled by \\(\\varepsilon\\). This geometric picture is incredibly useful: to prove something about a general measurable set, prove it for compact or open sets (which are geometrically tractable), and then pass to the limit.</p>
                    </div>
                </div>

                <h2>The \\(G_\\delta\\) and \\(F_\\sigma\\) Characterization</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.15 (\\(G_\\delta\\)/\\(F_\\sigma\\) Characterization)</div>
                    <div class="env-body">
                        <p>A set \\(E \\subseteq \\mathbb{R}^n\\) is Lebesgue measurable if and only if:</p>
                        <ol>
                            <li>\\(E = G \\setminus N_1\\) where \\(G\\) is a \\(G_\\delta\\) set (countable intersection of open sets) and \\(m(N_1) = 0\\).</li>
                            <li>Equivalently, \\(E = F \\cup N_2\\) where \\(F\\) is an \\(F_\\sigma\\) set (countable union of closed sets) and \\(m(N_2) = 0\\).</li>
                        </ol>
                        <p>In other words, every Lebesgue-measurable set is a Borel set plus or minus a null set.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Geometric Meaning of Measurability)</div>
                    <div class="env-body">
                        <p>Theorem 4.15 gives us a concrete geometric characterization of measurability. A Lebesgue-measurable set is one that differs from a "nice" (Borel) set by only a negligible amount. The Lebesgue \\(\\sigma\\)-algebra is the <em>completion</em> of the Borel \\(\\sigma\\)-algebra with respect to Lebesgue measure: we throw in all subsets of null sets.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="regularity-sandwich-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 1.5; Stein-Shakarchi III.3; Royden-Fitzpatrick 2.4.</p>
            `,
            visualizations: [
                {
                    id: 'regularity-sandwich-viz',
                    title: 'Regularity Sandwich',
                    description: 'Given a measurable set E, display compact K inside E inside open U, with m(U \\ K) < epsilon. User controls epsilon via slider.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var epsilon = 0.5;

                        VizEngine.createSlider(controls, '\u03B5 (sandwich gap)', 0.01, 1.5, epsilon, 0.01, function(v) {
                            epsilon = v;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var cx = w / 2, cy = h / 2 - 10;
                            var baseR = 100;

                            // The "set E" is drawn as a blobby shape
                            // K (compact) is E shrunk by epsilon-proportional amount
                            // U (open) is E expanded by epsilon-proportional amount
                            var expand = epsilon * 40;
                            var shrink = epsilon * 30;

                            function blobPath(centerX, centerY, radius, bumps) {
                                ctx.beginPath();
                                for (var t = 0; t <= 360; t++) {
                                    var theta = t * Math.PI / 180;
                                    var r = radius + bumps * (
                                        8 * Math.sin(3 * theta) +
                                        5 * Math.cos(5 * theta) +
                                        3 * Math.sin(7 * theta)
                                    );
                                    var px = centerX + r * Math.cos(theta);
                                    var py = centerY + r * Math.sin(theta);
                                    if (t === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.closePath();
                            }

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Regularity Sandwich: K \u2286 E \u2286 U', w / 2, 22);

                            // Draw U (open, outer) - dashed border
                            blobPath(cx, cy, baseR + expand, 1);
                            ctx.fillStyle = 'rgba(240, 136, 62, 0.12)';
                            ctx.fill();
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw E (the set) - solid border
                            blobPath(cx, cy, baseR, 1);
                            ctx.fillStyle = 'rgba(88, 166, 255, 0.2)';
                            ctx.fill();
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.stroke();

                            // Draw K (compact, inner) - solid filled
                            var innerR = Math.max(20, baseR - shrink);
                            blobPath(cx, cy, innerR, 0.7);
                            ctx.fillStyle = 'rgba(63, 185, 160, 0.3)';
                            ctx.fill();
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            // Labels
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('U (open)', cx + baseR + expand + 10, cy - 20);
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('E (measurable)', cx + baseR + 10, cy + 5);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('K (compact)', cx + innerR + 10, cy + 30);

                            // Gap annotation
                            var gapArea = Math.PI * ((baseR + expand) * (baseR + expand) - innerR * innerR);
                            var setArea = Math.PI * baseR * baseR;
                            // Normalize to something meaningful
                            var relGap = gapArea / setArea;

                            ctx.fillStyle = colors.yellow;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('m(U \\ K) < \u03B5 = ' + epsilon.toFixed(2), w / 2, h - 55);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('As \u03B5 \u2192 0, the compact core K and open envelope U', w / 2, h - 35);
                            ctx.fillText('squeeze together, pinching E from both sides', w / 2, h - 18);

                            // Draw squeeze arrows
                            ctx.strokeStyle = colors.yellow;
                            ctx.lineWidth = 1.5;
                            // Arrow pointing inward from U
                            var arrowX = cx - baseR - expand - 15;
                            ctx.beginPath();
                            ctx.moveTo(arrowX, cy);
                            ctx.lineTo(arrowX + 20, cy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(arrowX + 20, cy);
                            ctx.lineTo(arrowX + 14, cy - 5);
                            ctx.moveTo(arrowX + 20, cy);
                            ctx.lineTo(arrowX + 14, cy + 5);
                            ctx.stroke();

                            // Arrow pointing outward from K
                            var arrowX2 = cx + innerR - 5;
                            ctx.beginPath();
                            ctx.moveTo(arrowX2 + 20, cy - 40);
                            ctx.lineTo(arrowX2, cy - 40);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(arrowX2, cy - 40);
                            ctx.lineTo(arrowX2 + 6, cy - 45);
                            ctx.moveTo(arrowX2, cy - 40);
                            ctx.lineTo(arrowX2 + 6, cy - 35);
                            ctx.stroke();
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(E = \\mathbb{Q} \\cap [0,1]\\). Find an explicit open set \\(U \\supseteq E\\) with \\(m(U) &lt; \\varepsilon\\) for a given \\(\\varepsilon &gt; 0\\).',
                    hint: 'Enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\) and cover \\(q_k\\) with an open interval of length \\(\\varepsilon / 2^k\\).',
                    solution: 'Let \\(U = \\bigcup_{k=1}^{\\infty} (q_k - \\varepsilon/2^{k+1}, q_k + \\varepsilon/2^{k+1})\\). Then \\(U\\) is open, \\(E \\subseteq U\\), and \\(m(U) \\leq \\sum_{k=1}^{\\infty} \\varepsilon/2^k = \\varepsilon\\). Since \\(m(E) = 0\\), we have \\(m(U \\setminus E) = m(U) - m(E) \\leq \\varepsilon\\). This is a constructive demonstration of outer regularity for a countable set.'
                },
                {
                    question: 'Explain geometrically why inner regularity requires compactness (not just closedness) of the approximating set \\(K\\).',
                    hint: 'Consider the closed set \\(\\mathbb{R}^n\\) itself. A closed approximation from inside could be the set \\(E\\) itself if \\(E\\) is closed. The point of compactness is boundedness.',
                    solution: 'A closed set can be unbounded. For example, if \\(E = [0, \\infty)\\), then \\(E\\) is closed and \\(m(E) = \\infty\\). We need compact (bounded and closed) approximations so that the measure \\(m(K)\\) is finite and we can take \\(m(K) \\nearrow m(E)\\). Compactness gives us a "finite chunk" of the set. For sets of infinite measure, we need the compact sets to exhaust \\(E\\): \\(K_1 \\subseteq K_2 \\subseteq \\cdots\\) with \\(m(K_j) \\to m(E)\\).'
                },
                {
                    question: 'Use the \\(G_\\delta / F_\\sigma\\) characterization to show that every Lebesgue-measurable set of measure zero is contained in a \\(G_\\delta\\) set of measure zero.',
                    hint: 'Apply outer regularity with \\(\\varepsilon = 1/k\\) for \\(k = 1, 2, \\ldots\\) and take the intersection.',
                    solution: 'For each \\(k \\geq 1\\), by outer regularity, choose an open \\(U_k \\supseteq E\\) with \\(m(U_k) &lt; 1/k\\). Then \\(G = \\bigcap_{k=1}^{\\infty} U_k\\) is a \\(G_\\delta\\) set containing \\(E\\), and \\(m(G) \\leq m(U_k) &lt; 1/k\\) for all \\(k\\), so \\(m(G) = 0\\). This shows that null sets can always be "upgraded" to Borel null sets, reflecting the fact that \\(\\mathcal{L}^n\\) is the completion of \\(\\mathcal{B}(\\mathbb{R}^n)\\).'
                },
                {
                    question: 'Using the Regularity Sandwich visualization, slide \\(\\varepsilon\\) from 1.5 down to 0.01. What happens geometrically to the three regions (\\(K\\), \\(E\\), \\(U\\))?',
                    hint: 'As \\(\\varepsilon \\to 0\\), the outer open set and inner compact set should both converge to \\(E\\).',
                    solution: 'As \\(\\varepsilon\\) decreases: (1) the orange dashed boundary (open set \\(U\\)) tightens around the blue boundary (set \\(E\\)), (2) the teal region (compact set \\(K\\)) expands to fill nearly all of \\(E\\), and (3) the visible gap between \\(K\\) and \\(U\\) shrinks. In the limit \\(\\varepsilon \\to 0\\), both \\(K\\) and \\(U\\) converge to \\(E\\) in the sense that \\(m(U \\setminus K) \\to 0\\). This is the geometric essence of regularity: measurable sets are "almost open" from outside and "almost compact" from inside.'
                }
            ]
        },

        // ============================================================
        // Section 4: The Cantor Set and Lebesgue vs. Borel
        // ============================================================
        {
            id: 'cantor-set-lebesgue-vs-borel',
            title: 'The Cantor Set and Lebesgue-Measurable vs. Borel Sets',
            content: `
                <div class="bridge section-bridge">
                    <p>We now turn to the most famous pathological set in analysis: the <strong>Cantor set</strong>. It is a set of extraordinary geometric richness, simultaneously "tiny" (measure zero), "large" (uncountable), and "thin" (nowhere dense). It also provides the key to understanding the gap between Borel sets and Lebesgue-measurable sets, a gap that has profound consequences for the structure of the real line.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Construct the standard Cantor set, prove its key properties (uncountable, measure zero, nowhere dense), introduce fat Cantor sets, and establish that the Lebesgue \\(\\sigma\\)-algebra is strictly larger than the Borel \\(\\sigma\\)-algebra by a cardinality argument.</p>
                </div>

                <h2>The Standard Cantor Set: Construction</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.16 (The Cantor Middle-Thirds Set)</div>
                    <div class="env-body">
                        <p>Define a decreasing sequence of compact sets:</p>
                        <ul>
                            <li>\\(C_0 = [0, 1]\\)</li>
                            <li>\\(C_1 = [0, 1/3] \\cup [2/3, 1]\\) (remove the open middle third)</li>
                            <li>\\(C_2 = [0, 1/9] \\cup [2/9, 1/3] \\cup [2/3, 7/9] \\cup [8/9, 1]\\) (remove the middle third of each remaining interval)</li>
                            <li>At step \\(n\\): \\(C_n\\) consists of \\(2^n\\) disjoint closed intervals, each of length \\(3^{-n}\\).</li>
                        </ul>
                        <p>The <strong>Cantor set</strong> is the intersection:</p>
                        \\[\\mathcal{C} = \\bigcap_{n=0}^{\\infty} C_n.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Geometric Picture of the Construction)</div>
                    <div class="env-body">
                        <p>Visualize the unit interval as a bar of chocolate. At each step, you break every remaining piece into thirds and eat the middle third. After infinitely many steps, what remains? It feels like "nothing should be left," because you have eaten an infinite amount. But the Cantor set is far from nothing, as we shall see.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cantor-set-builder-viz"></div>

                <h2>Measure Zero, Yet Uncountable</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.17 (Measure of the Cantor Set)</div>
                    <div class="env-body">
                        <p>\\(m(\\mathcal{C}) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>At step \\(n\\), \\(C_n\\) is a union of \\(2^n\\) intervals each of length \\(3^{-n}\\), so</p>
                        \\[m(C_n) = 2^n \\cdot 3^{-n} = \\left(\\frac{2}{3}\\right)^n.\\]
                        <p>Since \\(\\mathcal{C} \\subseteq C_n\\) for all \\(n\\), we have \\(m(\\mathcal{C}) \\leq (2/3)^n \\to 0\\). Therefore \\(m(\\mathcal{C}) = 0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Where Did the Measure Go?)</div>
                    <div class="env-body">
                        <p>The total length removed is \\(\\frac{1}{3} + \\frac{2}{9} + \\frac{4}{27} + \\cdots = \\frac{1/3}{1 - 2/3} = 1\\). We removed the entire unit interval's worth of length! The Cantor set is what remains after removing a set of measure 1 from \\([0,1]\\). Geometrically, the removed middle thirds fill the whole interval in terms of length, even though the Cantor set is still uncountably infinite.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.18 (The Cantor Set Is Uncountable)</div>
                    <div class="env-body">
                        <p>\\(|\\mathcal{C}| = \\mathfrak{c} = |\\mathbb{R}|\\). The Cantor set has the cardinality of the continuum.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Every \\(x \\in [0,1]\\) has a ternary (base-3) expansion \\(x = \\sum_{k=1}^{\\infty} a_k \\cdot 3^{-k}\\), where \\(a_k \\in \\{0, 1, 2\\}\\). A point lies in \\(\\mathcal{C}\\) if and only if it has a ternary expansion using only the digits \\(0\\) and \\(2\\) (points with digit 1 in some position lie in a removed middle third).</p>
                        <p>The map \\(\\varphi: \\mathcal{C} \\to [0,1]\\) defined by \\(\\varphi\\left(\\sum a_k 3^{-k}\\right) = \\sum (a_k/2) \\cdot 2^{-k}\\) (replace each digit 2 by 1, read in binary) is a surjection onto \\([0,1]\\). Therefore \\(|\\mathcal{C}| \\geq |[0,1]| = \\mathfrak{c}\\). Since \\(\\mathcal{C} \\subseteq [0,1]\\), we also have \\(|\\mathcal{C}| \\leq \\mathfrak{c}\\), so \\(|\\mathcal{C}| = \\mathfrak{c}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Self-Similarity)</div>
                    <div class="env-body">
                        <p>The Cantor set is <strong>self-similar</strong>: \\(\\mathcal{C} = \\frac{1}{3}\\mathcal{C} \\cup \\left(\\frac{2}{3} + \\frac{1}{3}\\mathcal{C}\\right)\\). It is the union of two scaled copies of itself, each scaled by factor \\(1/3\\). This is the hallmark of a fractal. The Hausdorff dimension of \\(\\mathcal{C}\\) is \\(\\log 2 / \\log 3 \\approx 0.631\\), which is strictly between 0 (a single point) and 1 (an interval).</p>
                    </div>
                </div>

                <h2>Fat Cantor Sets</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.19 (Fat Cantor Set)</div>
                    <div class="env-body">
                        <p>Fix \\(0 &lt; \\alpha &lt; 1\\). At step \\(n\\), instead of removing a middle third, remove a middle interval of length \\(\\alpha \\cdot 3^{-n}\\) from each of the \\(2^{n-1}\\) remaining intervals. The total length removed is</p>
                        \\[\\sum_{n=1}^{\\infty} 2^{n-1} \\cdot \\frac{\\alpha}{3^n} = \\frac{\\alpha}{3} \\cdot \\frac{1}{1 - 2/3} = \\alpha.\\]
                        <p>The remaining set \\(\\mathcal{C}_\\alpha\\) is compact, nowhere dense, uncountable, and has measure \\(m(\\mathcal{C}_\\alpha) = 1 - \\alpha &gt; 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Positive Measure Yet Full of Holes)</div>
                    <div class="env-body">
                        <p>A fat Cantor set is a "Swiss cheese" subset of \\([0,1]\\): it contains no interval at all (nowhere dense), yet it has positive length! This dramatically illustrates that measure and topology capture different notions of "size." A set can be topologically tiny (meager, first category) yet measure-theoretically substantial. Conversely, \\(\\mathbb{Q} \\cap [0,1]\\) is topologically dense (it is everywhere) yet has measure zero.</p>
                    </div>
                </div>

                <h2>Lebesgue-Measurable vs. Borel Sets</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.20 (Cardinality of the Lebesgue \\(\\sigma\\)-Algebra)</div>
                    <div class="env-body">
                        <p>The Borel \\(\\sigma\\)-algebra has cardinality \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c}\\). The Lebesgue \\(\\sigma\\)-algebra has cardinality \\(|\\mathcal{L}| = 2^{\\mathfrak{c}}\\). In particular,</p>
                        \\[\\mathcal{B}(\\mathbb{R}) \\subsetneq \\mathcal{L} \\subsetneq \\mathcal{P}(\\mathbb{R}).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p><strong>Lower bound on \\(|\\mathcal{L}|\\):</strong> The Cantor set \\(\\mathcal{C}\\) has measure zero and cardinality \\(\\mathfrak{c}\\). Since \\(m\\) is complete, every subset of \\(\\mathcal{C}\\) is Lebesgue measurable. There are \\(2^{\\mathfrak{c}}\\) such subsets.</p>
                        <p><strong>Upper bound:</strong> \\(|\\mathcal{L}| \\leq |\\mathcal{P}(\\mathbb{R})| = 2^{\\mathfrak{c}}\\).</p>
                        <p><strong>Existence of non-Borel Lebesgue sets:</strong> Since \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c} &lt; 2^{\\mathfrak{c}} = |\\mathcal{L}|\\), there must exist Lebesgue-measurable sets that are not Borel. In fact, most Lebesgue-measurable sets (in terms of cardinality) are non-Borel.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Non-Borel Lebesgue Sets Are Not "Pathological")</div>
                    <div class="env-body">
                        <p>Every subset of the Cantor set is Lebesgue measurable (with measure zero), but uncountably many of them are not Borel. These non-Borel sets are measure-theoretically trivial (they are all null sets), but they demonstrate that the Lebesgue \\(\\sigma\\)-algebra is vastly larger than the Borel \\(\\sigma\\)-algebra. The excess comes entirely from the completion process (adding subsets of null sets).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Hierarchy of Sets)</div>
                    <div class="env-body">
                        <p>Think of concentric circles. The innermost circle is the Borel sets \\(\\mathcal{B}\\), with "only" \\(\\mathfrak{c}\\) many members. Surrounding it is the Lebesgue \\(\\sigma\\)-algebra \\(\\mathcal{L}\\) with \\(2^{\\mathfrak{c}}\\) members, hugely larger. But the outermost circle, \\(\\mathcal{P}(\\mathbb{R})\\) (all subsets), also has \\(2^{\\mathfrak{c}}\\) elements. The non-measurable sets (Vitali sets, etc.) live in \\(\\mathcal{P}(\\mathbb{R}) \\setminus \\mathcal{L}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-borel-venn-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 1.5; Stein-Shakarchi III.4; Royden-Fitzpatrick 2.7.</p>
            `,
            visualizations: [
                {
                    id: 'cantor-set-builder-viz',
                    title: 'Cantor Set Builder with Measure Tracker',
                    description: 'Step through the middle-thirds removal process. Track remaining measure at each stage, then generalize to fat Cantor sets.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 480;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922'
                        };

                        var removalRatio = 1/3;
                        var maxLevel = 6;
                        var showTernary = true;

                        VizEngine.createSlider(controls, 'Removal ratio', 0.01, 0.95, removalRatio, 0.01, function(v) {
                            removalRatio = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Levels', 0, 12, maxLevel, 1, function(v) {
                            maxLevel = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Standard (1/3)', function() {
                            removalRatio = 1/3;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Fat (1/5)', function() {
                            removalRatio = 1/5;
                            draw();
                        });

                        function getIntervals(level, ratio) {
                            var intervals = [[0, 1]];
                            for (var l = 0; l < level; l++) {
                                var next = [];
                                for (var i = 0; i < intervals.length; i++) {
                                    var a = intervals[i][0], b = intervals[i][1];
                                    var len = b - a;
                                    var gap = len * ratio;
                                    var side = (len - gap) / 2;
                                    next.push([a, a + side]);
                                    next.push([b - side, b]);
                                }
                                intervals = next;
                            }
                            return intervals;
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var margin = 55;
                            var barH = 16;
                            var gapY = 6;
                            var startY = 50;
                            var barW = w - 2 * margin - 90;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            var titleText = Math.abs(removalRatio - 1/3) < 0.02 ?
                                'Standard Cantor Set (remove middle 1/3)' :
                                (removalRatio < 1/3 ?
                                    'Fat Cantor Set (remove middle ' + (removalRatio * 100).toFixed(0) + '%)' :
                                    'Thin Cantor Set (remove middle ' + (removalRatio * 100).toFixed(0) + '%)');
                            ctx.fillText(titleText, w / 2, 22);

                            var measures = [];
                            var dispLevels = Math.min(maxLevel, 12);
                            var maxBars = Math.min(dispLevels + 1, Math.floor((h - startY - 130) / (barH + gapY)));

                            for (var level = 0; level < maxBars; level++) {
                                var intervals = getIntervals(level, removalRatio);
                                var y = startY + level * (barH + gapY);
                                var remaining = 0;

                                // Level label
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('n=' + level, margin - 8, y + barH / 2 + 4);

                                // Draw removed gaps as red ghost
                                if (level > 0) {
                                    var parent = getIntervals(level - 1, removalRatio);
                                    for (var p = 0; p < parent.length; p++) {
                                        var pa = parent[p][0], pb = parent[p][1];
                                        var plen = pb - pa;
                                        var pgap = plen * removalRatio;
                                        var gapStart = pa + (plen - pgap) / 2;
                                        var gapEnd = gapStart + pgap;
                                        ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                                        ctx.fillRect(
                                            margin + gapStart * barW, y,
                                            Math.max(1, (gapEnd - gapStart) * barW), barH
                                        );
                                    }
                                }

                                // Draw remaining intervals
                                for (var i = 0; i < intervals.length; i++) {
                                    var a = intervals[i][0], b = intervals[i][1];
                                    remaining += (b - a);
                                    var x1 = margin + a * barW;
                                    var x2 = margin + b * barW;

                                    var col;
                                    if (removalRatio < 1/3 - 0.02) col = colors.green;
                                    else if (removalRatio > 1/3 + 0.02) col = colors.orange;
                                    else col = colors.teal;

                                    ctx.fillStyle = col;
                                    ctx.globalAlpha = Math.max(0.3, 1 - level * 0.05);
                                    ctx.fillRect(x1, y, Math.max(0.5, x2 - x1), barH);
                                }
                                ctx.globalAlpha = 1;

                                measures.push(remaining);
                                ctx.fillStyle = remaining > 0.001 ? colors.green : colors.red;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(remaining.toFixed(5), margin + barW + 8, y + barH / 2 + 4);
                            }

                            // Measure decay graph
                            var graphTop = startY + maxBars * (barH + gapY) + 15;
                            var graphH = h - graphTop - 55;
                            if (graphH < 50) graphH = 50;

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(margin, graphTop, barW, graphH);

                            // Plot
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < measures.length; i++) {
                                var gx = margin + (measures.length > 1 ? i / (measures.length - 1) : 0) * barW;
                                var gy = graphTop + graphH - measures[i] * graphH;
                                if (i === 0) ctx.moveTo(gx, gy);
                                else ctx.lineTo(gx, gy);
                            }
                            ctx.stroke();

                            for (var i = 0; i < measures.length; i++) {
                                var gx = margin + (measures.length > 1 ? i / (measures.length - 1) : 0) * barW;
                                var gy = graphTop + graphH - measures[i] * graphH;
                                ctx.fillStyle = colors.teal;
                                ctx.beginPath();
                                ctx.arc(gx, gy, 3.5, 0, 2 * Math.PI);
                                ctx.fill();
                            }

                            // Limiting measure
                            var limMeasure = Math.pow(1 - removalRatio, maxLevel);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('m(C_n) = (1-r)^n', margin + barW + 8, graphTop + 14);
                            ctx.fillText('limit = ' + (removalRatio >= 1 ? '0' : (removalRatio <= 0 ? '1' : limMeasure.toFixed(6))), margin + barW + 8, graphTop + 30);

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'center';
                            ctx.fillText('Level n', margin + barW / 2, graphTop + graphH + 15);
                            ctx.save();
                            ctx.translate(margin - 20, graphTop + graphH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('Measure', 0, 0);
                            ctx.restore();

                            // Classification
                            ctx.textAlign = 'center';
                            ctx.font = '13px -apple-system, sans-serif';
                            if (Math.abs(removalRatio - 1/3) < 0.02) {
                                ctx.fillStyle = colors.purple;
                                ctx.fillText('Standard Cantor set: uncountable, measure 0, Hausdorff dim = log2/log3 \u2248 0.631', w / 2, h - 10);
                            } else if (removalRatio < 1/3) {
                                ctx.fillStyle = colors.green;
                                ctx.fillText('Fat Cantor set: uncountable, nowhere dense, positive measure \u2248 ' + limMeasure.toFixed(4), w / 2, h - 10);
                            } else {
                                ctx.fillStyle = colors.orange;
                                ctx.fillText('Thin Cantor set: uncountable, measure \u2192 0 faster than standard', w / 2, h - 10);
                            }
                        }

                        draw();
                    }
                },
                {
                    id: 'lebesgue-borel-venn-viz',
                    title: 'Lebesgue vs. Borel Venn Diagram',
                    description: 'Diagram showing the inclusions: Borel strictly inside Lebesgue strictly inside P(R), with example sets in each region.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922', pink: '#f778ba'
                        };

                        var highlightZone = -1;

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var cx = canvas.width / 2;
                            var cy = canvas.height / 2 - 15;
                            var dx = mx - cx, dy = my - cy;
                            var dist = Math.sqrt(dx * dx + dy * dy);

                            var prev = highlightZone;
                            if (dist < 80) highlightZone = 0;       // Borel
                            else if (dist < 145) highlightZone = 1;  // Lebesgue \ Borel
                            else if (dist < 195) highlightZone = 2;  // P(R) \ Lebesgue (non-measurable)
                            else highlightZone = -1;

                            if (prev !== highlightZone) draw();
                        });

                        canvas.addEventListener('mouseleave', function() {
                            highlightZone = -1;
                            draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var cx = w / 2, cy = h / 2 - 15;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Hierarchy of Subsets of \u211D', w / 2, 22);

                            // Outermost: P(R)
                            ctx.beginPath();
                            ctx.arc(cx, cy, 195, 0, 2 * Math.PI);
                            ctx.fillStyle = highlightZone === 2 ? 'rgba(248, 81, 73, 0.2)' : 'rgba(248, 81, 73, 0.08)';
                            ctx.fill();
                            ctx.strokeStyle = colors.red;
                            ctx.lineWidth = highlightZone === 2 ? 3 : 1.5;
                            ctx.stroke();

                            // Middle: Lebesgue
                            ctx.beginPath();
                            ctx.arc(cx, cy, 145, 0, 2 * Math.PI);
                            ctx.fillStyle = highlightZone === 1 ? 'rgba(188, 140, 255, 0.25)' : 'rgba(188, 140, 255, 0.1)';
                            ctx.fill();
                            ctx.strokeStyle = colors.purple;
                            ctx.lineWidth = highlightZone === 1 ? 3 : 1.5;
                            ctx.stroke();

                            // Inner: Borel
                            ctx.beginPath();
                            ctx.arc(cx, cy, 80, 0, 2 * Math.PI);
                            ctx.fillStyle = highlightZone === 0 ? 'rgba(88, 166, 255, 0.3)' : 'rgba(88, 166, 255, 0.12)';
                            ctx.fill();
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = highlightZone === 0 ? 3 : 1.5;
                            ctx.stroke();

                            // Labels on the rings
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';

                            ctx.fillStyle = colors.blue;
                            ctx.fillText('Borel sets', cx, cy - 55);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('|\u212C| = \ud835\udd20', cx, cy - 40);

                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.fillStyle = colors.purple;
                            ctx.fillText('Lebesgue \\ Borel', cx, cy + 100);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('|\u2112| = 2^\ud835\udd20', cx, cy + 115);

                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.fillStyle = colors.red;
                            ctx.fillText('\ud835\uDCAB(\u211D) \\ Lebesgue', cx + 130, cy - 140);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('non-measurable', cx + 130, cy - 125);

                            // Example sets for each zone
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';

                            // Borel examples
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('Open/closed sets', cx, cy - 18);
                            ctx.fillText('[0,1], \u211A, Cantor set', cx, cy - 3);
                            ctx.fillText('G\u03B4, F\u03C3 sets', cx, cy + 12);

                            // Lebesgue \ Borel examples
                            ctx.fillStyle = colors.purple;
                            ctx.fillText('Subsets of Cantor set', cx - 95, cy + 55);
                            ctx.fillText('(null, non-Borel)', cx - 95, cy + 70);

                            // Non-measurable examples
                            ctx.fillStyle = colors.red;
                            ctx.fillText('Vitali set', cx + 140, cy + 30);
                            ctx.fillText('Bernstein set', cx + 140, cy + 45);

                            // Cardinality summary at bottom
                            var boxY = h - 55;
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cardinalities: |\u212C(\u211D)| = \ud835\udd20   \u2282   |\u2112| = 2^\ud835\udd20   \u2282   |\ud835\uDCAB(\u211D)| = 2^\ud835\udd20', w / 2, boxY);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('The gap Borel \u2282 Lebesgue is enormous (\ud835\udd20 vs 2^\ud835\udd20). The gap Lebesgue \u2282 \ud835\uDCAB(\u211D) contains non-measurable sets.', w / 2, boxY + 18);
                            ctx.fillText('Hover over each zone to highlight it.', w / 2, boxY + 35);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the total length removed at each of the first 4 steps of the standard Cantor construction. Verify that the sum approaches 1.',
                    hint: 'At step \\(n\\), we remove \\(2^{n-1}\\) intervals each of length \\(3^{-n}\\).',
                    solution: 'Step 1: remove \\(1 \\times 1/3 = 1/3\\). Step 2: remove \\(2 \\times 1/9 = 2/9\\). Step 3: remove \\(4 \\times 1/27 = 4/27\\). Step 4: remove \\(8 \\times 1/81 = 8/81\\). Running totals: \\(1/3 \\approx 0.333\\), \\(1/3 + 2/9 = 5/9 \\approx 0.556\\), \\(5/9 + 4/27 = 19/27 \\approx 0.704\\), \\(19/27 + 8/81 = 65/81 \\approx 0.802\\). The geometric series sums to \\(\\sum_{n=1}^\\infty 2^{n-1}/3^n = (1/3)/(1-2/3) = 1\\).'
                },
                {
                    question: 'Explain why the Cantor set is nowhere dense. That is, prove that \\(\\mathcal{C}\\) contains no open interval.',
                    hint: 'If \\(\\mathcal{C}\\) contained an interval \\((a,b)\\), what would that imply about \\(m(\\mathcal{C})\\)?',
                    solution: 'If \\(\\mathcal{C}\\) contained an open interval \\((a,b)\\) with \\(b > a\\), then \\(m(\\mathcal{C}) \\geq m((a,b)) = b - a > 0\\). But \\(m(\\mathcal{C}) = 0\\), contradiction. Alternatively, at step \\(n\\), the longest interval in \\(C_n\\) has length \\(3^{-n} \\to 0\\), so \\(\\mathcal{C} = \\cap C_n\\) cannot contain any interval of positive length. Since \\(\\mathcal{C}\\) is closed and contains no interval, its interior is empty, so it is nowhere dense.'
                },
                {
                    question: 'Use the Cantor Set Builder visualization to find a removal ratio for which the fat Cantor set has measure approximately \\(0.5\\). What is this ratio?',
                    hint: 'The limiting measure at level \\(n\\) is \\((1-r)^n\\), and the actual limit as \\(n \\to \\infty\\) for the fat Cantor construction is \\(1 - \\alpha\\) where \\(\\alpha\\) depends on the exact removal scheme.',
                    solution: 'For the construction in the visualization, the remaining measure at level \\(n\\) is \\((1-r)^n\\). For the standard fat Cantor set with total removal \\(\\alpha\\), the limiting measure is \\(1 - \\alpha\\). To get measure \\(0.5\\), we need \\(\\alpha = 0.5\\), which for the middle-fraction removal scheme means \\(r \\approx 0.167\\) (or \\(1/6\\)). Using the visualization, slide the removal ratio to about \\(0.067\\) (which gives \\((1-0.067)^{10} \\approx 0.5\\) at 10 levels), or to about \\(0.167\\) for the true limiting fat Cantor set.'
                },
                {
                    question: 'Why does the completeness of Lebesgue measure imply that \\(|\\mathcal{L}| = 2^{\\mathfrak{c}}\\)? Where does the Cantor set enter the argument?',
                    hint: 'The Cantor set has measure zero and cardinality \\(\\mathfrak{c}\\). Completeness means every subset of a null set is measurable.',
                    solution: 'The Cantor set \\(\\mathcal{C}\\) satisfies: (1) \\(m(\\mathcal{C}) = 0\\), so by completeness, every \\(S \\subseteq \\mathcal{C}\\) is in \\(\\mathcal{L}\\) with \\(m(S) = 0\\). (2) \\(|\\mathcal{C}| = \\mathfrak{c}\\), so \\(\\mathcal{C}\\) has \\(2^{\\mathfrak{c}}\\) subsets. Therefore \\(|\\mathcal{L}| \\geq 2^{\\mathfrak{c}}\\). Since \\(\\mathcal{L} \\subseteq \\mathcal{P}(\\mathbb{R})\\) and \\(|\\mathcal{P}(\\mathbb{R})| = 2^{\\mathfrak{c}}\\), we get \\(|\\mathcal{L}| = 2^{\\mathfrak{c}}\\). Since \\(|\\mathcal{B}| = \\mathfrak{c} < 2^{\\mathfrak{c}}\\), there must exist Lebesgue-measurable sets that are not Borel.'
                }
            ]
        },

        // ============================================================
        // Section 5: Non-Measurable Sets Revisited
        // ============================================================
        {
            id: 'non-measurable-sets-revisited',
            title: 'Non-Measurable Sets Revisited',
            content: `
                <div class="bridge section-bridge">
                    <p>We close this chapter by returning to the crisis we met in Chapter 0: the impossibility of assigning a consistent "length" to every subset of \\(\\mathbb{R}\\). We now have the tools to give a complete, rigorous construction of a non-measurable set (the Vitali set) and to understand why the axiom of choice makes non-measurability inevitable.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Construct the Vitali set, prove it is not Lebesgue measurable, and discuss the set-theoretic landscape: the axiom of choice implies non-measurable sets exist, while Solovay's model shows that without full choice, all sets can be measurable.</p>
                </div>

                <h2>The Vitali Set: A Detailed Construction</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Setup)</div>
                    <div class="env-body">
                        <p>The idea is beautifully simple. Two real numbers \\(x\\) and \\(y\\) are "the same up to a rational shift" if \\(x - y \\in \\mathbb{Q}\\). This is an equivalence relation that partitions \\([0,1)\\) into uncountably many equivalence classes, each of which is dense. We then pick one representative from each class, using the axiom of choice. The resulting set is so tangled that it defies measurement.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.21 (The Equivalence Relation)</div>
                    <div class="env-body">
                        <p>Define the relation \\(\\sim\\) on \\([0,1)\\) by</p>
                        \\[x \\sim y \\quad \\iff \\quad x - y \\in \\mathbb{Q}.\\]
                        <p>This is an equivalence relation. Each equivalence class \\([x] = \\{y \\in [0,1) : y - x \\in \\mathbb{Q}\\}\\) is a countable dense subset of \\([0,1)\\) (it is a coset of \\(\\mathbb{Q}\\) intersected with \\([0,1)\\)).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.22 (The Vitali Set)</div>
                    <div class="env-body">
                        <p>Using the <strong>axiom of choice</strong>, select exactly one representative from each equivalence class of \\(\\sim\\). Call the resulting set \\(V \\subseteq [0,1)\\). This is a <strong>Vitali set</strong>.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (The Axiom of Choice Is Essential)</div>
                    <div class="env-body">
                        <p>The construction of \\(V\\) requires choosing one element from each of uncountably many sets. There is no explicit formula or rule for these choices; we invoke the axiom of choice (AC). This is not a technicality: without AC, the Vitali set may not exist. This is the price of non-measurability.</p>
                    </div>
                </div>

                <h2>The Proof of Non-Measurability</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.23 (The Vitali Set Is Not Lebesgue Measurable)</div>
                    <div class="env-body">
                        <p>The Vitali set \\(V\\) is not in \\(\\mathcal{L}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Enumerate the rationals in \\([-1, 1)\\) as \\(q_1, q_2, \\ldots\\). Define the translates</p>
                        \\[V_k = V + q_k \\pmod{1} = \\{\\{v + q_k\\} : v \\in V\\}\\]
                        <p>where \\(\\{\\cdot\\}\\) denotes the fractional part (reduction modulo 1 into \\([0,1)\\)).</p>
                        <p><strong>Key observations:</strong></p>
                        <ol>
                            <li><strong>The translates are disjoint:</strong> If \\(V_j \\cap V_k \\neq \\emptyset\\) for \\(j \\neq k\\), then two elements \\(v_1, v_2 \\in V\\) satisfy \\(v_1 + q_j \\equiv v_2 + q_k \\pmod{1}\\), so \\(v_1 - v_2 \\in \\mathbb{Q}\\), meaning \\(v_1 \\sim v_2\\). Since \\(V\\) contains exactly one element per class, \\(v_1 = v_2\\) and \\(q_j = q_k\\), contradicting \\(j \\neq k\\).</li>
                            <li><strong>The translates cover \\([0,1)\\):</strong> For any \\(x \\in [0,1)\\), the class \\([x]\\) has a representative \\(v \\in V\\), and \\(x - v \\in \\mathbb{Q} \\cap [-1, 1)\\), so \\(x \\in V_k\\) for the appropriate \\(k\\).</li>
                        </ol>
                        <p>Therefore \\([0, 1) = \\bigsqcup_{k=1}^{\\infty} V_k\\) (disjoint union), and by translation invariance (modular translation preserves Lebesgue measure on \\([0,1)\\)), each \\(V_k\\) has the same measure as \\(V\\). If \\(V\\) were measurable:</p>
                        \\[1 = m([0,1)) = \\sum_{k=1}^{\\infty} m(V_k) = \\sum_{k=1}^{\\infty} m(V).\\]
                        <p>If \\(m(V) = 0\\), the sum is 0, contradicting \\(= 1\\). If \\(m(V) > 0\\), the sum is \\(\\infty\\), contradicting \\(= 1\\). Either way, contradiction. Therefore \\(V \\notin \\mathcal{L}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Geometric Heart of the Argument)</div>
                    <div class="env-body">
                        <p>The proof is a Goldilocks argument. The Vitali set, together with its rational translates, tiles the interval \\([0,1)\\) perfectly. Translation invariance forces each tile to have the same area. But a countable number of identical tiles must add up to either 0 or \\(\\infty\\), neither of which equals 1. The Vitali set is a tile that cannot have any consistent area.</p>
                        <p>Geometrically, picture \\([0,1)\\) as a circle (identifying 0 and 1). The Vitali set picks one point from each orbit of the rational rotation group \\(\\mathbb{Q}/\\mathbb{Z}\\). The orbits tile the circle, but no single tile can carry a well-defined fraction of the circumference.</p>
                    </div>
                </div>

                <h2>The Role of the Axiom of Choice</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.24 (Solovay's Theorem, 1970)</div>
                    <div class="env-body">
                        <p>If the existence of an inaccessible cardinal is consistent with ZFC, then there is a model of ZF + DC (Zermelo-Fraenkel with Dependent Choice, but without full Choice) in which every subset of \\(\\mathbb{R}\\) is Lebesgue measurable.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (What Solovay's Theorem Tells Us)</div>
                    <div class="env-body">
                        <p>Solovay's result reveals that non-measurable sets are not a consequence of the real line's geometry; they are a consequence of the <strong>axiom of choice</strong>. Without full AC, we can consistently have a universe where every subset of \\(\\mathbb{R}\\) is measurable. The Vitali construction fails because we cannot select representatives without AC.</p>
                        <p>However, the "price" for Solovay's model is the loss of full AC and the assumption of an inaccessible cardinal. Most working mathematicians accept AC and live with non-measurable sets, confining themselves to Borel or Lebesgue-measurable sets in practice.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Other Non-Measurable Constructions)</div>
                    <div class="env-body">
                        <p>The Vitali set is not the only non-measurable set. Other examples include:</p>
                        <ul>
                            <li><strong>Bernstein sets:</strong> A set \\(B \\subseteq \\mathbb{R}\\) such that both \\(B\\) and \\(B^c\\) intersect every uncountable closed set. Neither \\(B\\) nor \\(B^c\\) can be Lebesgue measurable with positive measure.</li>
                            <li><strong>Non-measurable sets from Hamel bases:</strong> A Hamel basis for \\(\\mathbb{R}\\) over \\(\\mathbb{Q}\\) can be used to construct non-measurable sets.</li>
                            <li><strong>The Banach-Tarski paradox:</strong> In \\(\\mathbb{R}^3\\), the axiom of choice allows decomposing a ball into finitely many pieces that can be reassembled (via rotations and translations) into two balls of the same size. The pieces must be non-measurable.</li>
                        </ul>
                    </div>
                </div>

                <h2>Summary: The Geometric Landscape</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Full Picture)</div>
                    <div class="env-body">
                        <p>Lebesgue measure is a triumph of geometric analysis. Starting from the simple volume of rectangles, we built a measure that handles an enormous class of subsets of \\(\\mathbb{R}^n\\) while preserving the geometric symmetries we expect: translation invariance, scaling by \\(|c|^n\\), and invariance under rotations. The Lebesgue \\(\\sigma\\)-algebra is the completion of the Borel \\(\\sigma\\)-algebra, containing \\(2^{\\mathfrak{c}}\\) sets (compared to the Borel \\(\\sigma\\)-algebra's \\(\\mathfrak{c}\\)). The Cantor set, with its paradoxical combination of uncountability and measure zero, illustrates the subtle interplay between cardinality and measure.</p>
                        <p>But the axiom of choice places an absolute limit: not every set can be measured. The Vitali construction shows that translation invariance and countable additivity are fundamentally incompatible with universality. This is not a defect of Lebesgue measure but a deep feature of the mathematical landscape.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="vitali-orbit-viz"></div>

                <p><strong>Reference alignment:</strong> Folland 1.1; Stein-Shakarchi III.3; Royden-Fitzpatrick 3.4; Solovay, R. (1970) "A model of set-theory in which every set of reals is Lebesgue measurable," <em>Annals of Mathematics</em>.</p>
            `,
            visualizations: [
                {
                    id: 'vitali-orbit-viz',
                    title: 'Vitali Set: Rational Orbit Tiling',
                    description: 'Visualize the rational equivalence classes on the circle [0,1) mod 1 and see why choosing one representative per class creates an unmeasurable set.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40', yellow: '#d29922', pink: '#f778ba'
                        };

                        var numClasses = 5;
                        var numTranslates = 6;
                        var animPhase = 0;
                        var animating = false;
                        var animId = null;

                        VizEngine.createSlider(controls, 'Equivalence classes shown', 2, 12, numClasses, 1, function(v) {
                            numClasses = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Rational translates', 1, 15, numTranslates, 1, function(v) {
                            numTranslates = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Animate Tiling', function() {
                            if (animating) {
                                animating = false;
                                if (animId) cancelAnimationFrame(animId);
                                animId = null;
                            } else {
                                animating = true;
                                animPhase = 0;
                                animate();
                            }
                        });

                        // Generate representative irrationals for classes
                        function getRepresentatives(n) {
                            var reps = [];
                            // Use irrational multiples to get representatives from distinct classes
                            for (var i = 0; i < n; i++) {
                                var val = (Math.sqrt(2) * (i + 1)) % 1;
                                if (val < 0) val += 1;
                                reps.push(val);
                            }
                            return reps;
                        }

                        function getRationals(n) {
                            var rats = [0];
                            var count = 1;
                            for (var d = 1; count < n; d++) {
                                for (var num = 1; num < d && count < n; num++) {
                                    if (gcd(num, d) === 1) {
                                        rats.push(num / d);
                                        count++;
                                    }
                                }
                                if (count < n) {
                                    for (var num = -(d-1); num < 0 && count < n; num++) {
                                        if (gcd(Math.abs(num), d) === 1) {
                                            rats.push(num / d);
                                            count++;
                                        }
                                    }
                                }
                            }
                            return rats.slice(0, n);
                        }

                        function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }

                        function fracPart(x) { return ((x % 1) + 1) % 1; }

                        var classColors = [colors.blue, colors.teal, colors.orange, colors.green,
                                           colors.purple, colors.red, colors.yellow, colors.pink,
                                           '#7cb3ff', '#66d9cc', '#ffa666', '#77dd77'];

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var reps = getRepresentatives(numClasses);
                            var rats = getRationals(numTranslates);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Vitali Set: Rational Orbit Visualization', w / 2, 22);

                            // Draw the circle representation
                            var circleCX = w / 3;
                            var circleCY = h / 2 + 10;
                            var circleR = Math.min(w / 4, h / 3) - 20;

                            // Circle
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.arc(circleCX, circleCY, circleR, 0, 2 * Math.PI);
                            ctx.stroke();

                            // Label
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('[0, 1) as circle', circleCX, circleCY + circleR + 20);

                            // Draw points for each class
                            for (var c = 0; c < reps.length; c++) {
                                var col = classColors[c % classColors.length];
                                // The representative (Vitali point) - bigger
                                var angle0 = 2 * Math.PI * reps[c] - Math.PI / 2;
                                var px0 = circleCX + circleR * Math.cos(angle0);
                                var py0 = circleCY + circleR * Math.sin(angle0);
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(px0, py0, 5, 0, 2 * Math.PI);
                                ctx.fill();
                                // White border for representative
                                ctx.strokeStyle = '#ffffff';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();

                                // Orbit points (translates) - smaller, only if animating or always
                                var showTranslates = animating ? Math.floor(animPhase) : numTranslates;
                                for (var t = 1; t < Math.min(showTranslates, rats.length); t++) {
                                    var pt = fracPart(reps[c] + rats[t]);
                                    var angle = 2 * Math.PI * pt - Math.PI / 2;
                                    var px = circleCX + circleR * Math.cos(angle);
                                    var py = circleCY + circleR * Math.sin(angle);
                                    ctx.fillStyle = col;
                                    ctx.globalAlpha = 0.5;
                                    ctx.beginPath();
                                    ctx.arc(px, py, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                                ctx.globalAlpha = 1;
                            }

                            // Right side: the tiling explanation
                            var rightX = w * 0.6;
                            var lineHeight = 18;
                            var startY = 50;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('The Goldilocks Argument:', rightX, startY);

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillStyle = colors.muted;
                            var lines = [
                                '',
                                'V = {one representative per class}',
                                '(big dots on the circle)',
                                '',
                                'V + q\u2081, V + q\u2082, ... = translates',
                                '(small dots = orbit points)',
                                '',
                                'The translates tile [0,1):',
                                '[0,1) = V\u2081 \u228E V\u2082 \u228E V\u2083 \u228E ...',
                                '',
                                'Each V_k has measure m(V).',
                                '',
                                'If m(V) = 0: sum = 0 \u2260 1  \u2718',
                                'If m(V) > 0: sum = \u221E \u2260 1  \u2718',
                                '',
                                '\u2234 V is not measurable!'
                            ];

                            for (var i = 0; i < lines.length; i++) {
                                var line = lines[i];
                                if (line.indexOf('\u2718') >= 0) ctx.fillStyle = colors.red;
                                else if (line.indexOf('\u2234') >= 0) ctx.fillStyle = colors.yellow;
                                else if (line.indexOf('tile') >= 0) ctx.fillStyle = colors.teal;
                                else ctx.fillStyle = colors.muted;
                                ctx.fillText(line, rightX, startY + (i + 1) * lineHeight);
                            }

                            // Legend
                            var legY = h - 60;
                            ctx.fillStyle = colors.text;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Big dots = Vitali representatives (one per class). Small dots = rational orbit.', w / 2, legY);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Each color is one equivalence class. Together, orbits tile the circle perfectly.', w / 2, legY + 18);
                            ctx.fillText(numClasses + ' classes shown, ' + numTranslates + ' translates per class', w / 2, legY + 35);
                        }

                        function animate() {
                            if (!animating) return;
                            animPhase += 0.03;
                            if (animPhase > numTranslates + 1) animPhase = 1;
                            draw();
                            animId = requestAnimationFrame(animate);
                        }

                        draw();

                        return {
                            stopAnimation: function() {
                                animating = false;
                                if (animId) cancelAnimationFrame(animId);
                                animId = null;
                            }
                        };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the relation \\(x \\sim y \\iff x - y \\in \\mathbb{Q}\\) is indeed an equivalence relation on \\([0,1)\\).',
                    hint: 'Check reflexivity, symmetry, and transitivity using properties of \\(\\mathbb{Q}\\).',
                    solution: '<strong>Reflexivity:</strong> \\(x - x = 0 \\in \\mathbb{Q}\\), so \\(x \\sim x\\). <strong>Symmetry:</strong> If \\(x - y \\in \\mathbb{Q}\\), then \\(y - x = -(x-y) \\in \\mathbb{Q}\\), so \\(y \\sim x\\). <strong>Transitivity:</strong> If \\(x - y \\in \\mathbb{Q}\\) and \\(y - z \\in \\mathbb{Q}\\), then \\(x - z = (x - y) + (y - z) \\in \\mathbb{Q}\\), so \\(x \\sim z\\). All three properties follow from the fact that \\(\\mathbb{Q}\\) is a subgroup of \\((\\mathbb{R}, +)\\).'
                },
                {
                    question: 'Show that each equivalence class \\([x]\\) under \\(\\sim\\) is countable and dense in \\([0,1)\\).',
                    hint: 'The class \\([x]\\) is the intersection of a coset \\(x + \\mathbb{Q}\\) with \\([0,1)\\).',
                    solution: '\\([x] = (x + \\mathbb{Q}) \\cap [0,1)\\). Since \\(\\mathbb{Q}\\) is countable, \\(x + \\mathbb{Q}\\) is countable, and so is \\([x]\\). For density: given any open interval \\((a,b) \\subseteq [0,1)\\), we need to find \\(q \\in \\mathbb{Q}\\) with \\(x + q \\in (a,b)\\), i.e., \\(q \\in (a-x, b-x)\\). Since \\(\\mathbb{Q}\\) is dense in \\(\\mathbb{R}\\), such \\(q\\) exists (reduce modulo 1 if needed). Therefore \\([x]\\) is dense.'
                },
                {
                    question: 'In the Vitali proof, we used "modular translation" on \\([0,1)\\). Explain why ordinary translation \\(V + q\\) (without mod 1) would not give a partition of \\([0,1)\\), and how working modulo 1 fixes this.',
                    hint: 'If \\(v \\in V \\subseteq [0,1)\\) and \\(q > 0\\), then \\(v + q\\) may exceed 1.',
                    solution: 'If \\(V \\subseteq [0,1)\\) and \\(q > 0\\), then \\(V + q\\) can extend beyond \\([0,1)\\). For example, if \\(v = 0.8\\) and \\(q = 0.5\\), then \\(v + q = 1.3 \\notin [0,1)\\). The translates \\(\\{V + q : q \\in \\mathbb{Q} \\cap [-1,1)\\}\\) would not partition \\([0,1)\\) but rather a larger set. Working modulo 1 (i.e., on the circle \\(\\mathbb{R}/\\mathbb{Z}\\)) wraps everything back into \\([0,1)\\). Lebesgue measure on \\([0,1)\\) is invariant under modular translation because it is the restriction of the Haar measure on the compact group \\(\\mathbb{R}/\\mathbb{Z}\\).'
                },
                {
                    question: 'The Banach-Tarski paradox states that in \\(\\mathbb{R}^3\\), a ball can be decomposed into finitely many pieces and reassembled into two balls of the same size. Why does this not contradict our Lebesgue measure theory?',
                    hint: 'The "pieces" cannot all be Lebesgue measurable.',
                    solution: 'The decomposition pieces in the Banach-Tarski paradox are non-measurable sets (constructed using the axiom of choice). Lebesgue measure is not defined on these pieces, so there is no contradiction: we cannot write \\(m(\\text{ball}) = \\sum m(\\text{pieces})\\) because the pieces are not in \\(\\mathcal{L}^3\\). The paradox shows that the axiom of choice produces sets wild enough to "create volume from nothing," but only for non-measurable sets. For measurable sets, volume is perfectly well-behaved and additive. Note also that Banach-Tarski fails in \\(\\mathbb{R}^1\\) and \\(\\mathbb{R}^2\\) because the rotation groups in those dimensions are amenable.'
                }
            ]
        }
    ]
});
