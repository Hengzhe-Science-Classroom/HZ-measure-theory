window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',
    number: 0,
    title: 'The Need for Measure Theory',
    subtitle: 'Why Length, Area, and Probability Demand a New Framework',
    sections: [
        // ============================================================
        // Section 1: The Problem with "Length"
        // ============================================================
        {
            id: 'problem-with-length',
            title: 'The Problem with "Length"',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Welcome to Measure Theory.</strong> Before building any machinery, we must confront a crisis that shook the foundations of mathematics in the early 1900s. The question is deceptively simple: <em>what is the length of a set?</em></p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Understand that not every subset of \\(\\mathbb{R}\\) can be assigned a "length" that behaves the way we expect. Identify the precise properties we want a notion of length to satisfy, and see that these properties are mutually inconsistent when applied to <em>all</em> subsets of \\(\\mathbb{R}\\).</p>
                </div>

                <h2>A Thought Experiment</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Ruler Game)</div>
                    <div class="env-body">
                        <p>Imagine you have a perfect ruler and someone hands you subsets of the real line. For \\([0, 1]\\), you say "length 1." For \\([2, 5]\\), you say "length 3." For \\([0,1] \\cup [3,4]\\), you add them: "length 2." This feels natural, even automatic.</p>
                        <p>Now they hand you the set of all rational numbers in \\([0,1]\\). You stare at the ruler. The rationals are everywhere, infinitely many, yet they seem to occupy "no space." What number do you write down? And what about the irrationals in \\([0,1]\\)? Together with the rationals, they fill the whole interval, so their lengths should add to 1. But how?</p>
                        <p>Things get stranger. The Cantor set has as many points as the entire real line (both have cardinality \\(\\mathfrak{c}\\)), yet it has "length" zero. The interval \\([0,1]\\) and \\([0,2]\\) also have cardinality \\(\\mathfrak{c}\\), but lengths 1 and 2. <strong>Counting points cannot determine length.</strong></p>
                    </div>
                </div>

                <p>To make progress, let us be precise about what we want from a "length function."</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.1 (Desiderata for a Length Function)</div>
                    <div class="env-body">
                        <p>We seek a function \\(\\mu: \\mathcal{P}(\\mathbb{R}) \\to [0, \\infty]\\) (defined on <em>all</em> subsets of \\(\\mathbb{R}\\)) satisfying:</p>
                        <ol>
                            <li><strong>Interval agreement:</strong> \\(\\mu([a, b]) = b - a\\) for all \\(a \\leq b\\).</li>
                            <li><strong>Countable additivity:</strong> If \\(A_1, A_2, \\ldots\\) are pairwise disjoint, then \\(\\mu\\!\\left(\\bigcup_{n=1}^{\\infty} A_n\\right) = \\sum_{n=1}^{\\infty} \\mu(A_n)\\).</li>
                            <li><strong>Translation invariance:</strong> \\(\\mu(A + t) = \\mu(A)\\) for all \\(A \\subseteq \\mathbb{R}\\) and \\(t \\in \\mathbb{R}\\), where \\(A + t = \\{a + t : a \\in A\\}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why These Three?)</div>
                    <div class="env-body">
                        <p>Each property seems beyond reasonable doubt. <strong>Interval agreement</strong> anchors our function to the geometry we know. <strong>Countable additivity</strong> says that cutting a set into countably many disjoint pieces and summing their lengths recovers the length of the whole. <strong>Translation invariance</strong> says that sliding a set along the real line does not change its length. All three seem utterly reasonable, and yet they are mutually incompatible when applied to all subsets of \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.2 (Impossibility of Universal Length)</div>
                    <div class="env-body">
                        <p>There is no function \\(\\mu: \\mathcal{P}(\\mathbb{R}) \\to [0, \\infty]\\) satisfying all three desiderata of Definition 0.1 simultaneously.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (First Encounter with Non-Measurability)</div>
                    <div class="env-body">
                        <p>This theorem, whose proof via Vitali's construction we will see in Section 3, is one of the great surprises of early 20th-century mathematics. It tells us that the real line harbors subsets so "pathological" that no consistent notion of length can be assigned to them. The resolution, as we will see in Section 4, is to give up the requirement that \\(\\mu\\) be defined on <em>all</em> subsets, and instead restrict to a carefully chosen collection of "measurable" sets.</p>
                    </div>
                </div>

                <h2>Counting Does Not Determine Size</h2>

                <div class="env-block example">
                    <div class="env-title">Example 0.3 (Same Cardinality, Different Lengths)</div>
                    <div class="env-body">
                        <p>The intervals \\([0,1]\\) and \\([0,2]\\) both have the cardinality of the continuum \\(\\mathfrak{c} = |\\mathbb{R}|\\) (the map \\(x \\mapsto 2x\\) is a bijection), yet they should have lengths 1 and 2 respectively. Worse, the Cantor set \\(\\mathcal{C}\\) also has cardinality \\(\\mathfrak{c}\\) (it is uncountable), yet it has "length" 0 because it can be covered by intervals of arbitrarily small total length. Cardinality cannot distinguish these sets.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Do Not Confuse "Countable" with "Measure Zero")</div>
                    <div class="env-body">
                        <p>Every countable set has measure zero (a single point has length 0, and a countable sum of zeros is 0). But the converse is false: the standard Cantor set is uncountable yet has measure zero. Even more strikingly, one can build a "fat" Cantor set: uncountable, nowhere dense (containing no interval), yet with <em>positive</em> measure. Use the explorer below to see this.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fat-cantor-explorer"></div>
            `,
            visualizations: [
                {
                    id: 'fat-cantor-explorer',
                    title: 'Fat Cantor Set Explorer',
                    description: 'Build a Cantor-like set by adjusting the removal ratio. Watch the remaining measure change at each level, with a decay graph below.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var removalRatio = 1/3;
                        var maxLevel = 7;

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922'
                        };

                        VizEngine.createSlider(controls, 'Removal ratio r', 0.02, 0.95, removalRatio, 0.01, function(v) {
                            removalRatio = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Levels', 1, 10, maxLevel, 1, function(v) {
                            maxLevel = Math.round(v);
                            draw();
                        });

                        function getCantorIntervals(level, ratio) {
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

                            var margin = 50;
                            var barHeight = 14;
                            var gapY = 5;
                            var startY = 55;
                            var barW = w - 2 * margin - 80;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Fat Cantor Set Construction', w / 2, 22);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText('Remove middle ' + (removalRatio * 100).toFixed(0) + '% from each interval at each step', w / 2, 40);

                            var measures = [];
                            var totalLevels = Math.min(maxLevel, 10);

                            for (var level = 0; level <= totalLevels; level++) {
                                var intervals = getCantorIntervals(level, removalRatio);
                                var y = startY + level * (barHeight + gapY);
                                var remaining = 0;

                                // Level label
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('n=' + level, margin - 8, y + barHeight / 2 + 3);

                                // Draw intervals
                                for (var i = 0; i < intervals.length; i++) {
                                    var a = intervals[i][0], b = intervals[i][1];
                                    remaining += (b - a);
                                    var x1 = margin + a * barW;
                                    var x2 = margin + b * barW;
                                    var alpha = Math.max(0.35, 1 - level * 0.06);

                                    // Color depends on ratio
                                    var col = removalRatio < 1/3 ? colors.green :
                                              removalRatio < 0.5 ? colors.teal : colors.orange;
                                    ctx.globalAlpha = alpha;
                                    ctx.fillStyle = col;
                                    ctx.fillRect(x1, y, Math.max(1, x2 - x1), barHeight);
                                }
                                ctx.globalAlpha = 1;

                                // Draw removed segments in red (ghost)
                                if (level > 0) {
                                    var parent = getCantorIntervals(level - 1, removalRatio);
                                    for (var p = 0; p < parent.length; p++) {
                                        var pa = parent[p][0], pb = parent[p][1];
                                        var plen = pb - pa;
                                        var pgap = plen * removalRatio;
                                        var gapStart = pa + (plen - pgap) / 2;
                                        var gapEnd = gapStart + pgap;
                                        var gx1 = margin + gapStart * barW;
                                        var gx2 = margin + gapEnd * barW;
                                        ctx.fillStyle = 'rgba(248, 81, 73, 0.12)';
                                        ctx.fillRect(gx1, y, Math.max(1, gx2 - gx1), barHeight);
                                    }
                                }

                                // Measure label
                                measures.push(remaining);
                                ctx.fillStyle = remaining > 0.01 ? colors.green : colors.red;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(remaining.toFixed(4), margin + barW + 8, y + barHeight / 2 + 3);
                            }

                            // Bottom panel: measure graph
                            var graphY = startY + (totalLevels + 1) * (barHeight + gapY) + 15;
                            var graphH = h - graphY - 35;
                            var graphW = barW;

                            if (graphH > 40) {
                                // Graph border
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(margin, graphY, graphW, graphH);

                                // Plot measure decay
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i < measures.length; i++) {
                                    var gx = margin + (i / totalLevels) * graphW;
                                    var gy = graphY + graphH - measures[i] * graphH;
                                    if (i === 0) ctx.moveTo(gx, gy);
                                    else ctx.lineTo(gx, gy);
                                }
                                ctx.stroke();

                                // Dots
                                for (var i = 0; i < measures.length; i++) {
                                    var gx = margin + (i / totalLevels) * graphW;
                                    var gy = graphY + graphH - measures[i] * graphH;
                                    ctx.fillStyle = colors.green;
                                    ctx.beginPath();
                                    ctx.arc(gx, gy, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }

                                // Limiting measure formula
                                var limMeasure = Math.pow(1 - removalRatio, maxLevel);
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Remaining measure at level n: (1-r)^n', margin + graphW + 8, graphY + 12);

                                // Classification text
                                ctx.textAlign = 'center';
                                ctx.font = '12px -apple-system, sans-serif';
                                if (Math.abs(removalRatio - 1/3) < 0.01) {
                                    ctx.fillStyle = colors.purple;
                                    ctx.fillText('Standard Cantor set: uncountable, measure 0, nowhere dense', w / 2, h - 10);
                                } else if (removalRatio < 1/3) {
                                    ctx.fillStyle = colors.green;
                                    ctx.fillText('"Fat" Cantor set: uncountable, POSITIVE measure ' + limMeasure.toFixed(4) + ', yet nowhere dense!', w / 2, h - 10);
                                } else {
                                    ctx.fillStyle = colors.orange;
                                    ctx.fillText('Measure shrinks fast: ' + limMeasure.toFixed(6) + ' at level ' + maxLevel, w / 2, h - 10);
                                }
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that every countable subset of \\(\\mathbb{R}\\) must have "length" zero under any function satisfying countable additivity and interval agreement from Definition 0.1.',
                    hint: 'A single point \\(\\{x\\} = [x, x]\\) has length \\(x - x = 0\\). Now use countable additivity.',
                    solution: 'Let \\(A = \\{a_1, a_2, \\ldots\\}\\) be countable. Each singleton \\(\\{a_n\\} = [a_n, a_n]\\) has \\(\\mu(\\{a_n\\}) = a_n - a_n = 0\\). Since the singletons are pairwise disjoint and \\(A = \\bigcup_{n=1}^\\infty \\{a_n\\}\\), countable additivity gives \\(\\mu(A) = \\sum_{n=1}^\\infty \\mu(\\{a_n\\}) = \\sum_{n=1}^\\infty 0 = 0\\).'
                },
                {
                    question: 'Show that \\(\\mathbb{Q} \\cap [0,1]\\) can be covered by open intervals of total length less than \\(\\varepsilon\\) for any \\(\\varepsilon > 0\\). Conclude that the rationals in \\([0,1]\\) have "outer length" zero.',
                    hint: 'Enumerate the rationals as \\(q_1, q_2, \\ldots\\) and cover \\(q_n\\) with an interval of length \\(\\varepsilon / 2^n\\).',
                    solution: 'Enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\). For each \\(n\\), let \\(I_n = (q_n - \\varepsilon/2^{n+1}, q_n + \\varepsilon/2^{n+1})\\). Then \\(\\mathbb{Q} \\cap [0,1] \\subseteq \\bigcup_{n=1}^\\infty I_n\\), and the total length of the covering is \\(\\sum_{n=1}^\\infty |I_n| = \\sum_{n=1}^\\infty \\varepsilon/2^n = \\varepsilon\\). Since \\(\\varepsilon\\) was arbitrary, the outer length is zero.'
                },
                {
                    question: '(Exploration) Using the Fat Cantor Set Explorer, find a removal ratio for which the remaining set has measure approximately \\(1/2\\) after 10 levels. What is special about this set topologically?',
                    hint: 'You need \\((1-r)^{10} \\approx 0.5\\), so \\(r \\approx 1 - 0.5^{1/10}\\). Compute this numerically.',
                    solution: 'We need \\((1-r)^{10} = 0.5\\), so \\(r = 1 - 2^{-1/10} \\approx 1 - 0.9330 = 0.0670\\). With this removal ratio, the resulting set is <em>nowhere dense</em> (it contains no interval) yet has positive Lebesgue measure approximately \\(0.5\\). This shows that a set can be "topologically small" (meager, first category) yet "measure-theoretically large," demonstrating that topology and measure theory capture genuinely different notions of "size."'
                }
            ]
        },

        // ============================================================
        // Section 2: Historical Context: From Riemann to Lebesgue
        // ============================================================
        {
            id: 'riemann-to-lebesgue',
            title: 'Historical Context: From Riemann to Lebesgue',
            content: `
                <div class="bridge section-bridge">
                    <p>The crisis of length has a twin in the theory of integration. By the late 1800s, Bernhard Riemann's integral was the standard tool, and it served analysis brilliantly for half a century. But a new generation of mathematicians, including Emile Borel and Henri Lebesgue, discovered functions that the Riemann integral simply could not handle. The resolution that Lebesgue published in his 1902 thesis remains one of the most consequential ideas in all of mathematics.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Understand the limitations of the Riemann integral, appreciate why Lebesgue's idea of "measuring the range instead of the domain" resolves them, and see concrete examples where Riemann fails but Lebesgue succeeds.</p>
                </div>

                <h2>The Riemann Integral and Its Limits</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Vertical Slicing)</div>
                    <div class="env-body">
                        <p>Riemann's approach: partition the \\(x\\)-axis into subintervals, approximate the function by a constant on each subinterval, and sum the resulting rectangles. This <strong>vertical slicing</strong> works whenever the function is "not too discontinuous."</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.4 (Riemann Integrability)</div>
                    <div class="env-body">
                        <p>A bounded function \\(f: [a,b] \\to \\mathbb{R}\\) is <strong>Riemann integrable</strong> if and only if its set of discontinuities has (Lebesgue) measure zero. This is the Lebesgue criterion for Riemann integrability (1902).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.5 (The Dirichlet Function)</div>
                    <div class="env-body">
                        <p>Define \\(\\mathbf{1}_{\\mathbb{Q}}: [0,1] \\to \\mathbb{R}\\) by</p>
                        \\[\\mathbf{1}_{\\mathbb{Q}}(x) = \\begin{cases} 1 &amp; \\text{if } x \\in \\mathbb{Q}, \\\\ 0 &amp; \\text{if } x \\notin \\mathbb{Q}. \\end{cases}\\]
                        <p>This function is discontinuous everywhere (its set of discontinuities is all of \\([0,1]\\), which has measure 1). Every Riemann sum depends on whether we choose rational or irrational sample points, so the upper and lower sums are</p>
                        \\[U(P, f) = 1, \\quad L(P, f) = 0\\]
                        <p>for every partition \\(P\\). The Riemann integral does not exist.</p>
                        <p>Yet from a measure-theoretic perspective, \\(\\mathbf{1}_{\\mathbb{Q}} = 0\\) almost everywhere (since \\(\\mathbb{Q}\\) has measure zero), and the Lebesgue integral is \\(\\int_0^1 \\mathbf{1}_{\\mathbb{Q}}\\,d\\mu = 0\\). The Lebesgue integral "sees" that the rationals form a negligible set.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.6 (Fat Cantor Indicator)</div>
                    <div class="env-body">
                        <p>Construct a "fat" Cantor set \\(F \\subset [0,1]\\) of positive measure \\(\\mu(F) = 1/2\\) (by removing middle intervals of geometrically decreasing lengths that sum to \\(1/2\\)). The characteristic function \\(\\mathbf{1}_F\\) is discontinuous on a set of positive measure (the boundary of \\(F\\) has positive measure), so it is <em>not</em> Riemann integrable. Yet \\(\\mathbf{1}_F\\) is perfectly Lebesgue integrable, and \\(\\int_0^1 \\mathbf{1}_F\\,d\\mu = \\mu(F) = 1/2\\).</p>
                    </div>
                </div>

                <h2>Lebesgue's Revolution: Horizontal Slicing</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Accountant's Method)</div>
                    <div class="env-body">
                        <p>Here is Lebesgue's idea, explained by analogy. A Riemann integrator is like someone counting money by going through a pile bill by bill, in the order they lie. A Lebesgue integrator first sorts the bills by denomination, counts how many of each type, then multiplies and adds. The result is the same (the total), but the Lebesgue method works even when the bills are arranged chaotically.</p>
                        <p>Formally: instead of partitioning the domain (\\(x\\)-axis), partition the range (\\(y\\)-axis) into levels. For each level \\(t\\), measure the set \\(\\{x : f(x) &gt; t\\}\\). This is <strong>horizontal slicing</strong>, and it works whenever these level sets are measurable.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Layer-Cake Formula)</div>
                    <div class="env-body">
                        <p>Lebesgue's horizontal-slicing idea is captured precisely by the <strong>layer-cake formula</strong>: for a non-negative measurable function \\(f\\),</p>
                        \\[\\int f\\,d\\mu = \\int_0^{\\infty} \\mu\\!\\left(\\{x : f(x) &gt; t\\}\\right) dt.\\]
                        <p>This formula reduces integration to measuring level sets, making the connection between "measure" and "integral" transparent. We will prove this rigorously in Chapter 6.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="riemann-vs-lebesgue"></div>

                <h2>Why the Switch Matters</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Convergence: The Decisive Advantage)</div>
                    <div class="env-body">
                        <p>Beyond handling individual pathological functions, the Lebesgue integral has vastly superior <em>convergence properties</em>. The Monotone Convergence Theorem and the Dominated Convergence Theorem (Chapter 7) give clean conditions under which we can exchange limits and integrals. The Riemann integral has no comparable results. The Dirichlet function is the pointwise limit of Riemann-integrable functions \\(f_n = \\mathbf{1}_{\\{q_1,\\ldots,q_n\\}}\\), each with integral 0, yet the limit is not Riemann integrable. Under the Lebesgue theory, the integral of the limit equals the limit of the integrals: both are 0. This alone justifies the switch to the Lebesgue theory for any serious application in analysis, probability, or physics.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 1.1; Royden-Fitzpatrick 1.1; Stein-Shakarchi III.1.</p>
            `,
            visualizations: [
                {
                    id: 'riemann-vs-lebesgue',
                    title: 'Riemann vs. Lebesgue Partition Animator',
                    description: 'Side-by-side: vertical (Riemann) vs. horizontal (Lebesgue) slicing. Adjust the number of partitions and see the error decrease.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var nPart = 5;
                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            grid: '#1a1a40'
                        };

                        VizEngine.createSlider(controls, 'Number of partitions', 2, 40, nPart, 1, function(v) {
                            nPart = Math.round(v);
                            draw();
                        });

                        function f(x) {
                            return 0.3 + Math.sin(Math.PI * x) + 0.4 * Math.sin(2.5 * Math.PI * x);
                        }

                        // Precompute y range
                        var yMin = 0, yMax = 0;
                        for (var x = 0; x <= 1; x += 0.005) {
                            var val = f(x);
                            if (val < yMin) yMin = val;
                            if (val > yMax) yMax = val;
                        }
                        yMax = Math.ceil(yMax * 5) / 5 + 0.1;
                        yMin = Math.min(yMin, -0.1);

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var halfW = Math.floor(w / 2) - 12;
                            var mg = { l: 42, r: 12, t: 50, b: 50 };
                            var pw = halfW - mg.l - mg.r;
                            var ph = h - mg.t - mg.b;

                            // True integral (numerical)
                            var trueInt = 0;
                            var steps = 500;
                            for (var s = 0; s < steps; s++) {
                                trueInt += f((s + 0.5) / steps) / steps;
                            }

                            function drawPanel(ox, mode) {
                                function sx(x) { return ox + mg.l + x * pw; }
                                function sy(y) { return h - mg.b - ((y - yMin) / (yMax - yMin)) * ph; }

                                // Axes
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(sx(0), mg.t);
                                ctx.lineTo(sx(0), h - mg.b);
                                ctx.lineTo(sx(1), h - mg.b);
                                ctx.stroke();

                                // Title
                                ctx.fillStyle = colors.text;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(
                                    mode === 'riemann' ? 'Riemann: Partition the Domain' : 'Lebesgue: Partition the Range',
                                    ox + mg.l + pw / 2, 22
                                );

                                // Subtitle
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.fillText(
                                    mode === 'riemann' ? '(Vertical slicing)' : '(Horizontal slicing)',
                                    ox + mg.l + pw / 2, 38
                                );

                                if (mode === 'riemann') {
                                    // Midpoint Riemann sum
                                    var dx = 1 / nPart;
                                    var riemannSum = 0;
                                    for (var i = 0; i < nPart; i++) {
                                        var xL = i * dx, xR = (i + 1) * dx;
                                        var xM = (xL + xR) / 2;
                                        var fv = f(xM);
                                        riemannSum += fv * dx;

                                        var sx1 = sx(xL), sx2 = sx(xR);
                                        var sy0 = sy(0), sy1 = sy(fv);

                                        ctx.fillStyle = fv >= 0 ? 'rgba(88, 166, 255, 0.3)' : 'rgba(248, 81, 73, 0.3)';
                                        ctx.fillRect(sx1, Math.min(sy0, sy1), sx2 - sx1, Math.abs(sy1 - sy0));
                                        ctx.strokeStyle = fv >= 0 ? colors.blue : colors.red;
                                        ctx.lineWidth = 1;
                                        ctx.strokeRect(sx1, Math.min(sy0, sy1), sx2 - sx1, Math.abs(sy1 - sy0));
                                    }
                                    // Error display
                                    var err = Math.abs(riemannSum - trueInt);
                                    ctx.fillStyle = colors.green;
                                    ctx.font = '12px -apple-system, sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('Sum = ' + riemannSum.toFixed(4) + '  |  Error = ' + err.toFixed(4), ox + mg.l + pw / 2, h - 12);
                                } else {
                                    // Lebesgue: horizontal bands
                                    var dy = (yMax - yMin) / nPart;
                                    var hueStart = 160, hueRange = 180;
                                    for (var j = 0; j < nPart; j++) {
                                        var yLev = yMin + j * dy;
                                        var yNxt = yMin + (j + 1) * dy;
                                        var yMid = (yLev + yNxt) / 2;

                                        // Compute measure of {x: f(x) in [yLev, yNxt)}
                                        var segments = [];
                                        var inSeg = false;
                                        var segStart = 0;
                                        var res = 300;
                                        for (var s = 0; s <= res; s++) {
                                            var xx = s / res;
                                            var fv = f(xx);
                                            if (fv >= yLev && fv < yNxt) {
                                                if (!inSeg) { segStart = xx; inSeg = true; }
                                            } else {
                                                if (inSeg) { segments.push([segStart, xx]); inSeg = false; }
                                            }
                                        }
                                        if (inSeg) segments.push([segStart, 1]);

                                        var hue = Math.floor(hueStart + j * hueRange / nPart);
                                        var syBot = sy(yLev), syTop = sy(yNxt);

                                        for (var s = 0; s < segments.length; s++) {
                                            var sx1 = sx(segments[s][0]);
                                            var sx2 = sx(segments[s][1]);
                                            ctx.fillStyle = 'hsla(' + hue + ', 65%, 50%, 0.35)';
                                            ctx.fillRect(sx1, Math.min(syBot, syTop), Math.max(1, sx2 - sx1), Math.abs(syBot - syTop));
                                        }

                                        // Level line
                                        ctx.strokeStyle = 'hsla(' + hue + ', 65%, 60%, 0.4)';
                                        ctx.lineWidth = 0.5;
                                        ctx.beginPath();
                                        ctx.moveTo(sx(0), sy(yMid));
                                        ctx.lineTo(sx(1), sy(yMid));
                                        ctx.stroke();
                                    }
                                    ctx.fillStyle = colors.green;
                                    ctx.font = '12px -apple-system, sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('True integral ~ ' + trueInt.toFixed(4), ox + mg.l + pw / 2, h - 12);
                                }

                                // Draw function curve on top
                                ctx.strokeStyle = colors.text;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var px = 0; px <= pw; px++) {
                                    var xx = px / pw;
                                    var fy = sy(f(xx));
                                    if (px === 0) ctx.moveTo(sx(xx), fy);
                                    else ctx.lineTo(sx(xx), fy);
                                }
                                ctx.stroke();

                                // Zero line
                                ctx.strokeStyle = colors.muted;
                                ctx.lineWidth = 0.5;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                ctx.moveTo(sx(0), sy(0));
                                ctx.lineTo(sx(1), sy(0));
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            drawPanel(0, 'riemann');
                            drawPanel(halfW + 24, 'lebesgue');

                            // Divider
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(halfW + 12, 42);
                            ctx.lineTo(halfW + 12, h - 40);
                            ctx.stroke();
                            ctx.setLineDash([]);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'The Dirichlet function \\(\\mathbf{1}_{\\mathbb{Q}}\\) is the pointwise limit of Riemann-integrable functions \\(f_n = \\mathbf{1}_{\\{q_1,\\ldots,q_n\\}}\\), each with integral 0. Why is this a problem for the Riemann theory?',
                    hint: 'Each \\(f_n\\) has finitely many discontinuities and Riemann integral 0. What happens to the limit?',
                    solution: 'Each \\(f_n\\) is Riemann integrable with \\(\\int_0^1 f_n = 0\\), yet \\(f_n \\to \\mathbf{1}_{\\mathbb{Q}}\\) pointwise, and the limit is not Riemann integrable. The Riemann integral is not closed under pointwise limits, a serious defect. The Lebesgue integral resolves this: the Dominated Convergence Theorem gives \\(\\int \\lim f_n = \\lim \\int f_n = 0\\).'
                },
                {
                    question: 'Verify the layer-cake formula for the simple function \\(f = 2 \\cdot \\mathbf{1}_{[0,1/3]} + 5 \\cdot \\mathbf{1}_{(1/3,1]}\\).',
                    hint: 'Compute \\(\\mu(\\{f > t\\})\\) for \\(t \\in [0,2), [2,5), [5, \\infty)\\) and integrate over \\(t\\).',
                    solution: 'For \\(t \\in [0, 2)\\): \\(\\{f > t\\} = [0,1]\\), so \\(\\mu = 1\\). For \\(t \\in [2, 5)\\): \\(\\{f > t\\} = (1/3, 1]\\), so \\(\\mu = 2/3\\). For \\(t \\geq 5\\): \\(\\{f > t\\} = \\emptyset\\), so \\(\\mu = 0\\). Thus \\(\\int_0^\\infty \\mu(\\{f > t\\})\\,dt = 2 \\cdot 1 + 3 \\cdot 2/3 + 0 = 2 + 2 = 4\\). Direct computation: \\(\\int f = 2 \\cdot 1/3 + 5 \\cdot 2/3 = 2/3 + 10/3 = 4\\). They agree.'
                },
                {
                    question: 'The Thomae function (ruler function) \\(f: [0,1] \\to \\mathbb{R}\\) is defined by \\(f(p/q) = 1/q\\) for \\(p/q\\) in lowest terms and \\(f(x) = 0\\) for irrational \\(x\\). Show that \\(f\\) is Riemann integrable. (This function is discontinuous at every rational.)',
                    hint: 'Show that \\(f\\) is continuous at every irrational and discontinuous at every rational. Use the Lebesgue criterion.',
                    solution: 'At irrational \\(x\\), for any \\(\\varepsilon > 0\\), there are only finitely many rationals \\(p/q\\) in any bounded interval with \\(1/q \\geq \\varepsilon\\), so we can find \\(\\delta > 0\\) such that \\(|f(y)| < \\varepsilon\\) for all \\(y \\in (x-\\delta, x+\\delta)\\). Since \\(f(x) = 0\\), \\(f\\) is continuous at \\(x\\). At rational \\(p/q\\), nearby irrationals give \\(f = 0\\) but \\(f(p/q) = 1/q > 0\\), so \\(f\\) is discontinuous. The set of discontinuities is \\(\\mathbb{Q} \\cap [0,1]\\), which has measure zero. By the Lebesgue criterion, \\(f\\) is Riemann integrable.'
                }
            ]
        },

        // ============================================================
        // Section 3: Vitali's Construction
        // ============================================================
        {
            id: 'vitali-construction',
            title: "Vitali's Construction: A Detective Story",
            content: `
                <div class="bridge section-bridge">
                    <p>In 1905, Giuseppe Vitali published a two-page note that permanently changed the landscape of analysis. He showed that the three innocent-sounding properties from Section 1 are, in fact, <em>mutually contradictory</em> when applied to all subsets of \\(\\mathbb{R}\\). The proof is a masterpiece of economy: it uses just one tool (the Axiom of Choice), one equivalence relation, and one counting argument. Let us follow Vitali's reasoning step by step, as if solving a mystery.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Construct a non-measurable subset of \\([0,1]\\) step by step, and prove that assigning it <em>any</em> value for its length leads to a contradiction.</p>
                </div>

                <h2>Act I: The Equivalence Relation</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Sorting by Rational Distance)</div>
                    <div class="env-body">
                        <p>Think of the interval \\([0,1)\\) as a circle (identify 0 and 1). Two points on this circle are "friends" if you can get from one to the other by a rational hop. This friendship is an equivalence relation: it partitions the circle into cliques. Each clique is a countable, dense mesh (because the rationals are countable and dense). There are uncountably many such cliques, all tangled up with one another.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.7 (Rational Equivalence)</div>
                    <div class="env-body">
                        <p>Define an equivalence relation on \\([0,1)\\) by</p>
                        \\[x \\sim y \\iff x - y \\in \\mathbb{Q}.\\]
                        <p>This partitions \\([0,1)\\) into equivalence classes. The class of \\(x\\) is \\([x] = \\{(x + q) \\bmod 1 : q \\in \\mathbb{Q}\\}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.8 (Equivalence Classes)</div>
                    <div class="env-body">
                        <p>The class \\([0] = \\mathbb{Q} \\cap [0,1)\\) consists of all rationals in \\([0,1)\\). The class \\([\\sqrt{2} - 1]\\) consists of all numbers of the form \\((\\sqrt{2} - 1) + q\\) with \\(q \\in \\mathbb{Q}\\) and the result reduced modulo 1 to lie in \\([0,1)\\). There are uncountably many equivalence classes, and each class is a countable dense subset of \\([0,1)\\).</p>
                    </div>
                </div>

                <h2>Act II: The Axiom of Choice Enters</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.9 (Vitali Set)</div>
                    <div class="env-body">
                        <p>Using the <strong>Axiom of Choice</strong>, select exactly one representative from each equivalence class. Call the resulting set \\(V \\subset [0,1)\\). This is a <strong>Vitali set</strong>.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Axiom of Choice is Essential)</div>
                    <div class="env-body">
                        <p>The Vitali construction uses the Axiom of Choice in a fundamental way. In Solovay's model (1970) of ZF + DC (Zermelo-Fraenkel set theory with Dependent Choice but without full Choice), every subset of \\(\\mathbb{R}\\) is Lebesgue measurable. Non-measurable sets are an unavoidable consequence of the Axiom of Choice. You cannot "see" or "describe" a Vitali set; you can only prove it exists.</p>
                    </div>
                </div>

                <h2>Act III: The Trap</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Setting the Trap)</div>
                    <div class="env-body">
                        <p>Here is the detective's trick. Take the Vitali set \\(V\\) and make countably many shifted copies: \\(V_n = V \\oplus r_n\\), where \\(r_1, r_2, \\ldots\\) enumerate all rationals in \\([0,1)\\) and \\(\\oplus\\) is addition mod 1. Two key facts spring the trap:</p>
                        <ol>
                            <li><strong>The copies are disjoint.</strong> If two copies overlap, some element belongs to two classes, but \\(V\\) picks exactly one representative per class.</li>
                            <li><strong>The copies cover everything.</strong> Every \\(x \\in [0,1)\\) belongs to some class, so \\(x\\) differs from some \\(v \\in V\\) by a rational, placing \\(x\\) in the corresponding copy.</li>
                        </ol>
                        <p>So: countably many disjoint copies of \\(V\\), each the same "size" (by translation invariance), which together tile \\([0,1)\\) perfectly. Now apply countable additivity...</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.10 (Vitali, 1905)</div>
                    <div class="env-body">
                        <p>The Vitali set \\(V\\) is not Lebesgue measurable. More precisely, there is no value \\(\\mu(V) \\in [0, \\infty]\\) consistent with countable additivity and translation invariance.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Enumerate the rationals in \\([0,1)\\) as \\(\\{r_1, r_2, \\ldots\\}\\) with \\(r_1 = 0\\). For each \\(n\\), define \\(V_n = V \\oplus r_n\\) (translation modulo 1), where \\(V \\oplus r = \\{(v + r) \\bmod 1 : v \\in V\\}\\).</p>

                        <p><strong>Claim 1:</strong> The sets \\(V_1, V_2, \\ldots\\) are pairwise disjoint.</p>
                        <p><em>Proof of Claim 1:</em> Suppose \\(x \\in V_m \\cap V_n\\) with \\(m \\neq n\\). Then \\(x = v_1 + r_m = v_2 + r_n \\pmod{1}\\) for some \\(v_1, v_2 \\in V\\). So \\(v_1 - v_2 = r_n - r_m \\in \\mathbb{Q}\\), meaning \\(v_1 \\sim v_2\\). Since \\(V\\) contains exactly one element from each equivalence class, \\(v_1 = v_2\\), hence \\(r_m = r_n\\), contradicting \\(m \\neq n\\).</p>

                        <p><strong>Claim 2:</strong> \\(\\bigcup_{n=1}^{\\infty} V_n = [0,1)\\).</p>
                        <p><em>Proof of Claim 2:</em> For any \\(x \\in [0,1)\\), there exists \\(v \\in V\\) with \\(x \\sim v\\), so \\(x - v = r_k\\) for some rational \\(r_k\\). Then \\(x \\in V_k\\).</p>

                        <p><strong>Deriving the contradiction:</strong> By translation invariance, \\(\\mu(V_n) = \\mu(V)\\) for all \\(n\\). By countable additivity and Claims 1 and 2:</p>
                        \\[1 = \\mu([0,1)) = \\mu\\!\\left(\\bigcup_{n=1}^{\\infty} V_n\\right) = \\sum_{n=1}^{\\infty} \\mu(V_n) = \\sum_{n=1}^{\\infty} \\mu(V).\\]

                        <p>A sum \\(\\sum_{n=1}^\\infty c\\) of a constant \\(c \\geq 0\\) equals 0 if \\(c = 0\\) and \\(+\\infty\\) if \\(c > 0\\). Neither equals 1. Contradiction in either case.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="vitali-builder"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Banach-Tarski Paradox)</div>
                    <div class="env-body">
                        <p>The Vitali construction is the one-dimensional analogue of the far more spectacular <strong>Banach-Tarski paradox</strong> (1924): a solid ball in \\(\\mathbb{R}^3\\) can be decomposed into finitely many pieces and reassembled (using only rotations and translations) into <em>two</em> solid balls of the same size as the original. The pieces must be non-measurable. This spectacularly illustrates why restricting to measurable sets is non-negotiable.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'vitali-builder',
                    title: 'Interactive Vitali Set Builder',
                    description: 'Step through the equivalence-class construction on [0,1) and see how the contradiction arises.',
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
                            yellow: '#d29922', pink: '#f778ba'
                        };

                        var step = 0;
                        var numTrans = 4;

                        VizEngine.createButton(controls, 'Next Step', function() {
                            step = Math.min(step + 1, 4);
                            draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            step = 0;
                            draw();
                        });
                        VizEngine.createSlider(controls, 'Translates shown', 2, 10, numTrans, 1, function(v) {
                            numTrans = Math.round(v);
                            if (step >= 3) draw();
                        });

                        // Sample class representatives (irrational-ish)
                        var reps = [0, 0.1, 0.41421, 0.14159, 0.71828, 0.6180, 0.3010];
                        var repCols = [colors.blue, colors.teal, colors.orange, colors.green, colors.purple, colors.pink, colors.yellow];
                        var rats = [0, 0.5, 0.25, 0.75, 0.125, 0.375, 0.625, 0.875, 0.1, 0.9];

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            var mg = 55;
                            var lineY = 85;
                            var barW = w - 2 * mg;

                            function toSx(x) { return mg + ((x % 1) + 1) % 1 * barW; }

                            // Step titles
                            var titles = [
                                'Act I: The interval [0, 1)',
                                'Act I: Equivalence classes (x ~ y iff x - y is rational)',
                                'Act II: Pick one representative per class (the Vitali set V)',
                                'Act III: Translate V by each rational to tile [0,1)',
                                'The Contradiction: 1 = sum of m(V) = 0 or infinity!'
                            ];
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(titles[step], w / 2, 25);

                            // Draw the line segment
                            var segY = lineY + 40;
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(mg, segY);
                            ctx.lineTo(mg + barW, segY);
                            ctx.stroke();

                            // Tick marks on segment
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 0; t <= 4; t++) {
                                var sx = mg + (t / 4) * barW;
                                ctx.beginPath();
                                ctx.moveTo(sx, segY - 4);
                                ctx.lineTo(sx, segY + 4);
                                ctx.stroke();
                                ctx.fillText((t / 4).toFixed(2), sx, segY + 16);
                            }

                            if (step >= 1) {
                                // Show some equivalence class members on the segment
                                var numClasses = Math.min(4, reps.length);
                                for (var c = 0; c < numClasses; c++) {
                                    var numMembers = Math.min(6, rats.length);
                                    for (var r = 0; r < numMembers; r++) {
                                        var val = ((reps[c] + rats[r]) % 1 + 1) % 1;
                                        var sx = mg + val * barW;
                                        ctx.fillStyle = repCols[c];
                                        ctx.globalAlpha = 0.7;
                                        ctx.beginPath();
                                        ctx.arc(sx, segY - 8 - c * 5, 3, 0, 2 * Math.PI);
                                        ctx.fill();
                                    }
                                }
                                ctx.globalAlpha = 1;

                                // Labels
                                var labY = segY + 30;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                var labels = ['[0] = rationals', '[0.1] = 0.1+Q', '[sqrt(2)-1]', '[pi-3]'];
                                for (var c = 0; c < numClasses; c++) {
                                    ctx.fillStyle = repCols[c];
                                    ctx.beginPath();
                                    ctx.arc(mg + c * 130, labY + 4, 4, 0, 2 * Math.PI);
                                    ctx.fill();
                                    ctx.fillText(labels[c], mg + c * 130 + 10, labY + 8);
                                }
                            }

                            if (step >= 2) {
                                // Show representatives (big dots)
                                var repY = segY + 55;
                                ctx.fillStyle = colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('V = {one representative per class}', w / 2, repY);

                                for (var c = 0; c < Math.min(5, reps.length); c++) {
                                    var sx = mg + reps[c] * barW;
                                    ctx.fillStyle = repCols[c];
                                    ctx.beginPath();
                                    ctx.arc(sx, segY, 6, 0, 2 * Math.PI);
                                    ctx.fill();
                                    ctx.strokeStyle = '#ffffff';
                                    ctx.lineWidth = 1.5;
                                    ctx.stroke();
                                }
                            }

                            if (step >= 3) {
                                // Show translates
                                var transStartY = segY + 70;
                                ctx.fillStyle = colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Translates V + r_n are disjoint and cover [0,1):', w / 2, transStartY);

                                for (var n = 0; n < Math.min(numTrans, rats.length); n++) {
                                    var ty = transStartY + 16 + n * 16;
                                    var r = rats[n];

                                    ctx.fillStyle = colors.muted;
                                    ctx.font = '10px -apple-system, sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.fillText('V+' + r.toFixed(3) + ':', mg - 6, ty + 4);

                                    for (var c = 0; c < Math.min(5, reps.length); c++) {
                                        var val = ((reps[c] + r) % 1 + 1) % 1;
                                        var sx = mg + val * barW;
                                        ctx.fillStyle = repCols[c] + '88';
                                        ctx.beginPath();
                                        ctx.arc(sx, ty, 2.5, 0, 2 * Math.PI);
                                        ctx.fill();
                                    }
                                }
                            }

                            if (step >= 4) {
                                // Contradiction panel with red box
                                var contY = segY + 70 + 20 + Math.min(numTrans, rats.length) * 16 + 10;
                                if (contY > h - 70) contY = h - 70;

                                // Red box
                                ctx.fillStyle = 'rgba(248, 81, 73, 0.1)';
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 2;
                                var boxW = Math.min(420, w - 40);
                                ctx.beginPath();
                                ctx.roundRect(w / 2 - boxW / 2, contY - 5, boxW, 60, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = colors.red;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('CONTRADICTION', w / 2, contY + 14);

                                ctx.fillStyle = colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.fillText('1 = m([0,1)) = m(V) + m(V) + m(V) + ...', w / 2, contY + 32);

                                ctx.fillStyle = colors.orange;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.fillText('m(V)=0 gives sum=0.  m(V)>0 gives sum=inf.  Neither is 1!', w / 2, contY + 48);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Why is it essential that each equivalence class in the Vitali construction is <em>countable</em>? What would happen if the classes were uncountable?',
                    hint: 'If the classes were uncountable, we would need uncountably many translates. The argument uses countable additivity, not uncountable additivity.',
                    solution: 'Each class \\([x] = \\{x + q \\bmod 1 : q \\in \\mathbb{Q}\\}\\) is in bijection with \\(\\mathbb{Q}\\), hence countable. The number of classes is the index \\(|[0,1)/\\!\\sim| = |\\mathbb{R}/\\mathbb{Q}|\\), which is uncountable. But in the proof, we translate by the <em>countable</em> set of rationals, producing countably many translates whose union is \\([0,1)\\). If the classes were uncountable, the translates would be uncountable, and countable additivity would not apply to the infinite union.'
                },
                {
                    question: 'Show that the Vitali set \\(V\\) has Lebesgue outer measure \\(\\mu^*(V) > 0\\).',
                    hint: 'The countably many translates \\(V_n\\) cover \\([0,1)\\), and outer measure is countably subadditive.',
                    solution: 'We have \\([0,1) = \\bigcup_{n=1}^\\infty V_n\\). By subadditivity of outer measure: \\(1 = \\mu^*([0,1)) \\leq \\sum_{n=1}^\\infty \\mu^*(V_n)\\). By translation invariance of outer measure: \\(\\mu^*(V_n) = \\mu^*(V)\\) for all \\(n\\). So \\(1 \\leq \\sum_{n=1}^\\infty \\mu^*(V)\\). If \\(\\mu^*(V) = 0\\), the sum would be 0, a contradiction. Hence \\(\\mu^*(V) > 0\\).'
                },
                {
                    question: 'Does the Axiom of Choice produce a "specific" Vitali set? Can you write down its elements explicitly?',
                    hint: 'Think about what the Axiom of Choice actually asserts versus what it constructs.',
                    solution: 'No. The Axiom of Choice guarantees the <em>existence</em> of a choice function (one representative per class) but does not provide any explicit description or algorithm for constructing one. A Vitali set is inherently non-constructive. In fact, in ZF + DC without full AC (Solovay model), no Vitali set exists. This is why non-measurable sets are sometimes called "pathological": they cannot be described by any formula or rule, only asserted to exist.'
                }
            ]
        },

        // ============================================================
        // Section 4: Preview of the Measure-Theoretic Framework
        // ============================================================
        {
            id: 'preview-framework',
            title: 'Preview of the Measure-Theoretic Framework',
            content: `
                <div class="bridge section-bridge">
                    <p>Vitali's construction demonstrated that we cannot measure every subset of \\(\\mathbb{R}\\). This is not a technical inconvenience; it is a fundamental barrier. The resolution, developed by Borel, Lebesgue, and later formalized by Caratheodory, is both elegant and powerful: instead of trying to measure <em>all</em> sets, we <strong>restrict attention to a well-behaved collection</strong> of sets. This section gives an informal roadmap of the resulting framework, which we will develop rigorously in Chapters 1 through 4.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Introduce the three pillars of measure theory (sigma-algebras, measures, and integration) at an intuitive level, and explain how they resolve the paradoxes of Sections 1 and 3.</p>
                </div>

                <h2>The Three Pillars</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Architecture)</div>
                    <div class="env-body">
                        <p>The measure-theoretic framework has three layers:</p>
                        <ol>
                            <li><strong>Sigma-algebra \\(\\mathcal{F}\\)</strong>: the collection of "measurable" sets (the sets we are <em>allowed</em> to measure). It is closed under complements and countable unions, which ensures that Boolean operations on measurable sets stay measurable.</li>
                            <li><strong>Measure \\(\\mu\\)</strong>: a function assigning a non-negative size to each set in \\(\\mathcal{F}\\), satisfying countable additivity. It generalizes length, area, volume, and probability.</li>
                            <li><strong>Integration</strong>: once we know which sets are measurable and what their sizes are, we can integrate functions by approximating them with simple functions and using the measure to weight the pieces.</li>
                        </ol>
                        <p>The Vitali set is simply not in \\(\\mathcal{F}\\), so it causes no contradiction. Every set you encounter in analysis, probability, or applications is in \\(\\mathcal{F}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.11 (Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>A <strong>sigma-algebra</strong> (or \\(\\sigma\\)-algebra) on a set \\(X\\) is a collection \\(\\mathcal{F} \\subseteq \\mathcal{P}(X)\\) of subsets of \\(X\\) that:</p>
                        <ol>
                            <li>Contains \\(X\\) itself.</li>
                            <li>Is closed under complements: if \\(A \\in \\mathcal{F}\\), then \\(A^c \\in \\mathcal{F}\\).</li>
                            <li>Is closed under countable unions: if \\(A_1, A_2, \\ldots \\in \\mathcal{F}\\), then \\(\\bigcup_{n=1}^\\infty A_n \\in \\mathcal{F}\\).</li>
                        </ol>
                        <p>The sets in \\(\\mathcal{F}\\) are called <strong>measurable sets</strong>. The pair \\((X, \\mathcal{F})\\) is a <strong>measurable space</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Sigma-Algebras?)</div>
                    <div class="env-body">
                        <p>A sigma-algebra is the collection of sets to which we <em>can</em> consistently assign a measure. The closure axioms ensure that if we can measure \\(A\\) and \\(B\\), we can also measure their union, intersection, complement, and so on, using only countably many operations. The Vitali set is not in the Lebesgue sigma-algebra, and that is precisely why it causes no contradiction.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.12 (Measure)</div>
                    <div class="env-body">
                        <p>A <strong>measure</strong> on a measurable space \\((X, \\mathcal{F})\\) is a function \\(\\mu: \\mathcal{F} \\to [0, \\infty]\\) such that:</p>
                        <ol>
                            <li>\\(\\mu(\\emptyset) = 0\\).</li>
                            <li>Countable additivity: for pairwise disjoint \\(A_1, A_2, \\ldots \\in \\mathcal{F}\\),
                            \\[\\mu\\!\\left(\\bigcup_{n=1}^\\infty A_n\\right) = \\sum_{n=1}^\\infty \\mu(A_n).\\]</li>
                        </ol>
                        <p>The triple \\((X, \\mathcal{F}, \\mu)\\) is a <strong>measure space</strong>.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.13 (Key Measures)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Lebesgue measure</strong> on \\((\\mathbb{R}, \\mathcal{L})\\): assigns \\(\\mu([a,b]) = b-a\\) to intervals, and extends to a rich collection of sets (the Lebesgue measurable sets). Constructed rigorously in Chapter 4.</li>
                            <li><strong>Counting measure</strong> on any set \\(X\\): \\(\\mu(A) = |A|\\) (number of elements, possibly \\(\\infty\\)). Every subset is measurable.</li>
                            <li><strong>Probability measure</strong>: a measure with \\(\\mu(X) = 1\\). The foundation of modern probability (Section 5).</li>
                            <li><strong>Dirac measure</strong> at \\(x_0\\): \\(\\delta_{x_0}(A) = 1\\) if \\(x_0 \\in A\\), \\(0\\) otherwise.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.14 (Measurable Function and Integration, Preview)</div>
                    <div class="env-body">
                        <p>A function \\(f: X \\to \\mathbb{R}\\) is <strong>measurable</strong> if preimages of "nice" sets are measurable: \\(\\{x : f(x) &gt; a\\} \\in \\mathcal{F}\\) for all \\(a \\in \\mathbb{R}\\). Once we have measurable functions, we can define the <strong>Lebesgue integral</strong> \\(\\int f\\,d\\mu\\), first for simple functions and then by approximation (Chapters 5-6).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="framework-roadmap"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (How This Resolves the Paradoxes)</div>
                    <div class="env-body">
                        <p>The Vitali paradox arose because we tried to define \\(\\mu\\) on <em>all</em> subsets. By restricting the domain to the Lebesgue sigma-algebra (which excludes the Vitali set and similar pathological sets), we obtain a function \\(\\mu\\) that satisfies all three desiderata of Definition 0.1 on the sets where it <em>is</em> defined. The tradeoff is that some sets simply have no assigned length. In practice, every set you will ever encounter in analysis, probability, or applications is Lebesgue measurable.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Course Architecture)</div>
                    <div class="env-body">
                        <p>The rest of this course builds the framework outlined above in rigorous detail:</p>
                        <ul>
                            <li><strong>Part A (Ch 1-4):</strong> Sigma-algebras, measures, Caratheodory extension, Lebesgue measure.</li>
                            <li><strong>Part B (Ch 5-9):</strong> Measurable functions, integration, convergence theorems (MCT, DCT, Fatou), \\(L^p\\) spaces.</li>
                            <li><strong>Part C (Ch 10-13):</strong> Signed measures, Radon-Nikodym, product measures, differentiation.</li>
                            <li><strong>Part D (Ch 14-17):</strong> Probability, Fourier analysis, Riesz representation, Haar measure.</li>
                        </ul>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'framework-roadmap',
                    title: 'Measure Theory Framework Roadmap',
                    description: 'Interactive diagram showing the three pillars of measure theory and how they connect.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var hovered = -1;

                        var nodes = [
                            { x: 0.17, y: 0.22, label: 'Sigma-Algebra', sub: 'Which sets can we measure?', ch: 'Ch 1', col: colors.green },
                            { x: 0.50, y: 0.22, label: 'Measure', sub: 'Assign size to measurable sets', ch: 'Ch 2-4', col: colors.blue },
                            { x: 0.83, y: 0.22, label: 'Integration', sub: 'Sum functions against a measure', ch: 'Ch 5-6', col: colors.orange },
                            { x: 0.30, y: 0.55, label: 'Measurable Fn', sub: 'Preimages of Borel sets are in F', ch: 'Ch 5', col: colors.teal },
                            { x: 0.50, y: 0.78, label: 'Convergence', sub: 'MCT, Fatou, DCT', ch: 'Ch 7-8', col: colors.purple },
                            { x: 0.70, y: 0.55, label: 'Lp Spaces', sub: 'Banach spaces of functions', ch: 'Ch 9', col: colors.yellow }
                        ];

                        var edges = [[0,1],[1,2],[0,3],[1,3],[3,2],[2,4],[2,5],[4,5]];

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, w, h);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Measure-Theoretic Framework', w / 2, 22);

                            // Draw edges first
                            for (var e = 0; e < edges.length; e++) {
                                var a = nodes[edges[e][0]], b = nodes[edges[e][1]];
                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(a.x * w, a.y * h);
                                ctx.lineTo(b.x * w, b.y * h);
                                ctx.stroke();

                                // Arrowhead
                                var dx = b.x * w - a.x * w, dy = b.y * h - a.y * h;
                                var len = Math.sqrt(dx * dx + dy * dy);
                                var ang = Math.atan2(dy, dx);
                                var hx = b.x * w - dx / len * 38;
                                var hy = b.y * h - dy / len * 38;
                                ctx.fillStyle = colors.muted;
                                ctx.beginPath();
                                ctx.moveTo(hx, hy);
                                ctx.lineTo(hx - 7 * Math.cos(ang - 0.5), hy - 7 * Math.sin(ang - 0.5));
                                ctx.lineTo(hx - 7 * Math.cos(ang + 0.5), hy - 7 * Math.sin(ang + 0.5));
                                ctx.closePath();
                                ctx.fill();
                            }

                            // Draw nodes
                            for (var i = 0; i < nodes.length; i++) {
                                var n = nodes[i];
                                var nx = n.x * w, ny = n.y * h;
                                var bw = 115, bh = 48;

                                ctx.fillStyle = i === hovered ? n.col + '44' : n.col + '18';
                                ctx.strokeStyle = n.col;
                                ctx.lineWidth = i === hovered ? 2.5 : 1.5;
                                ctx.beginPath();
                                ctx.roundRect(nx - bw / 2, ny - bh / 2, bw, bh, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = n.col;
                                ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(n.label, nx, ny - 7);

                                ctx.fillStyle = colors.muted;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.fillText(n.ch, nx, ny + 10);
                            }

                            // Hover description
                            ctx.textBaseline = 'alphabetic';
                            if (hovered >= 0) {
                                ctx.fillStyle = nodes[hovered].col;
                                ctx.font = '13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(nodes[hovered].sub, w / 2, h - 15);
                            } else {
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Hover or tap a node to learn its role in the framework.', w / 2, h - 15);
                            }
                        }

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left, my = e.clientY - rect.top;
                            var w = canvas.width, ht = canvas.height;
                            hovered = -1;
                            for (var i = 0; i < nodes.length; i++) {
                                if (Math.abs(mx - nodes[i].x * w) < 60 && Math.abs(my - nodes[i].y * ht) < 28) {
                                    hovered = i; break;
                                }
                            }
                            draw();
                        });

                        canvas.addEventListener('mouseleave', function() { hovered = -1; draw(); });

                        canvas.addEventListener('touchstart', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.touches[0].clientX - rect.left, my = e.touches[0].clientY - rect.top;
                            var w = canvas.width, ht = canvas.height;
                            hovered = -1;
                            for (var i = 0; i < nodes.length; i++) {
                                if (Math.abs(mx - nodes[i].x * w) < 60 && Math.abs(my - nodes[i].y * ht) < 28) {
                                    hovered = i; break;
                                }
                            }
                            draw();
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'The power set \\(\\mathcal{P}(X)\\) is always a sigma-algebra. Why do we not simply use \\(\\mathcal{P}(\\mathbb{R})\\) as our sigma-algebra?',
                    hint: 'What goes wrong when we try to define a translation-invariant, countably additive measure on \\(\\mathcal{P}(\\mathbb{R})\\)?',
                    solution: 'While \\(\\mathcal{P}(\\mathbb{R})\\) is indeed a sigma-algebra, no non-trivial translation-invariant, countably additive measure can be defined on it (Vitali, Theorem 0.10). The Borel and Lebesgue sigma-algebras are strictly smaller than \\(\\mathcal{P}(\\mathbb{R})\\) but large enough to contain every set arising in practice, while being small enough to support a consistent measure.'
                },
                {
                    question: 'Verify that the collection \\(\\mathcal{F} = \\{A \\subseteq \\mathbb{R} : A \\text{ is countable or } A^c \\text{ is countable}\\}\\) is a sigma-algebra (the co-countable sigma-algebra). Is Lebesgue measure defined on all of \\(\\mathcal{F}\\)?',
                    hint: 'Check the three axioms. For countable unions, consider whether a countable union of countable sets is countable.',
                    solution: '(1) \\(\\mathbb{R} \\in \\mathcal{F}\\) since \\(\\mathbb{R}^c = \\emptyset\\) is countable. (2) If \\(A \\in \\mathcal{F}\\), then either \\(A\\) is countable (so \\(A^c\\) has countable complement \\(A\\)) or \\(A^c\\) is countable. Either way, \\(A^c \\in \\mathcal{F}\\). (3) Let \\(A_n \\in \\mathcal{F}\\). If all \\(A_n\\) are countable, then \\(\\bigcup A_n\\) is countable (countable union of countable sets). If some \\(A_k\\) has countable complement, then \\((\\bigcup A_n)^c \\subseteq A_k^c\\), which is countable, so \\(\\bigcup A_n \\in \\mathcal{F}\\). This is the <em>co-countable sigma-algebra</em>. Yes, Lebesgue measure is defined on \\(\\mathcal{F}\\), since \\(\\mathcal{F} \\subseteq \\mathcal{L}\\) (the Lebesgue sigma-algebra): countable sets have Lebesgue measure 0, and their complements have infinite measure.'
                },
                {
                    question: 'On the co-countable sigma-algebra \\(\\mathcal{F}\\) from the previous exercise, define \\(\\mu(A) = 0\\) if \\(A\\) is countable and \\(\\mu(A) = 1\\) if \\(A^c\\) is countable. Is \\(\\mu\\) a measure?',
                    hint: 'Check countable additivity. Can two disjoint sets both have countable complements (on an uncountable space)?',
                    solution: 'Yes. \\(\\mu(\\emptyset) = 0\\). For countable additivity: if \\(A_1, A_2, \\ldots\\) are pairwise disjoint and in \\(\\mathcal{F}\\), at most one can have countable complement (if two did, say \\(A_i^c\\) and \\(A_j^c\\), then \\(\\mathbb{R} = A_i^c \\cup A_j^c \\cup (A_i \\cap A_j)\\); since \\(A_i \\cap A_j = \\emptyset\\) and both complements are countable, \\(\\mathbb{R}\\) would be countable, contradiction). So \\(\\sum \\mu(A_n)\\) is 0 or 1, matching \\(\\mu(\\bigcup A_n)\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Connections to Probability, Physics, and Economics
        // ============================================================
        {
            id: 'connections',
            title: 'Connections to Probability, Physics, and Economics',
            content: `
                <div class="bridge section-bridge">
                    <p>The preceding sections established that measure theory is necessary to resolve foundational questions about length and integration. But the reach of measure theory extends far beyond pure mathematics. It is the <em>universal language</em> for quantifying uncertainty and size across mathematics, science, and economics. This section surveys three domains where the abstract framework from Section 4 pays enormous dividends.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> See that probability, quantum mechanics, and expected utility theory are all built on measure-theoretic foundations, and understand why the abstract framework of Chapters 1-4 pays off with enormous applied dividends.</p>
                </div>

                <h2>Kolmogorov's Axiomatization of Probability (1933)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Probability Needs Measure Theory)</div>
                    <div class="env-body">
                        <p>Before Kolmogorov, probability was a collection of tricks without a rigorous foundation. What does it mean for a continuous random variable to "equal" a specific value with probability zero? How do you condition on events of probability zero? How do you prove the law of large numbers for general random variables?</p>
                        <p>The answer: probability <em>is</em> measure theory, with \\(\\mu(\\Omega) = 1\\). Every probabilistic concept translates directly into measure-theoretic language.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.15 (Probability Space)</div>
                    <div class="env-body">
                        <p>A <strong>probability space</strong> is a measure space \\((\\Omega, \\mathcal{F}, P)\\) where \\(P(\\Omega) = 1\\). The elements of \\(\\Omega\\) are <em>outcomes</em>, the sets in \\(\\mathcal{F}\\) are <em>events</em>, and \\(P\\) is the <em>probability measure</em>.</p>
                        <p>A <strong>random variable</strong> is a measurable function \\(X: \\Omega \\to \\mathbb{R}\\). Its <strong>expected value</strong> is the Lebesgue integral \\(E[X] = \\int_\\Omega X\\,dP\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Measure-Probability Dictionary)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; margin:8px 0;">
                            <tr style="border-bottom:1px solid #333;">
                                <th style="text-align:left; padding:4px;">Measure Theory</th>
                                <th style="text-align:left; padding:4px;">Probability</th>
                            </tr>
                            <tr><td style="padding:3px;">Measure space \\((X, \\mathcal{F}, \\mu)\\)</td><td style="padding:3px;">Probability space \\((\\Omega, \\mathcal{F}, P)\\)</td></tr>
                            <tr><td style="padding:3px;">Measurable set</td><td style="padding:3px;">Event</td></tr>
                            <tr><td style="padding:3px;">Measurable function</td><td style="padding:3px;">Random variable</td></tr>
                            <tr><td style="padding:3px;">\\(\\int f\\,d\\mu\\)</td><td style="padding:3px;">\\(E[X]\\)</td></tr>
                            <tr><td style="padding:3px;">Almost everywhere (a.e.)</td><td style="padding:3px;">Almost surely (a.s.)</td></tr>
                            <tr><td style="padding:3px;">\\(L^2\\) norm</td><td style="padding:3px;">Second moment / variance</td></tr>
                            <tr><td style="padding:3px;">Radon-Nikodym derivative</td><td style="padding:3px;">Likelihood ratio / conditional density</td></tr>
                            <tr><td style="padding:3px;">Product measure</td><td style="padding:3px;">Independence</td></tr>
                            <tr><td style="padding:3px;">DCT / MCT</td><td style="padding:3px;">Convergence of expectations</td></tr>
                        </table>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.16 (Uniform Distribution = Lebesgue Measure)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\text{Uniform}(0,1)\\). Then \\(\\Omega = [0,1]\\), \\(\\mathcal{F}\\) is the Borel sigma-algebra on \\([0,1]\\), and \\(P\\) is Lebesgue measure restricted to \\([0,1]\\). For any Borel set \\(A \\subseteq [0,1]\\),</p>
                        \\[P(X \\in A) = \\mu(A),\\]
                        <p>where \\(\\mu\\) is Lebesgue measure. The expected value \\(E[X] = \\int_0^1 x\\,dx = 1/2\\) is a Lebesgue integral.</p>
                    </div>
                </div>

                <h2>Quantum Mechanics: Projection-Valued Measures</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Observables as Measures)</div>
                    <div class="env-body">
                        <p>In quantum mechanics, observables (position, momentum, energy) are represented by self-adjoint operators on a Hilbert space \\(\\mathcal{H}\\). The <strong>spectral theorem</strong> associates each self-adjoint operator \\(A\\) with a <strong>projection-valued measure</strong> (PVM) \\(E: \\mathcal{B}(\\mathbb{R}) \\to \\text{Proj}(\\mathcal{H})\\):</p>
                        \\[A = \\int_{-\\infty}^{\\infty} \\lambda\\,dE(\\lambda).\\]
                        <p>For a quantum state \\(|\\psi\\rangle\\), the probability of measuring observable \\(A\\) in the Borel set \\(B\\) is</p>
                        \\[P(A \\in B) = \\langle \\psi | E(B) | \\psi \\rangle.\\]
                        <p>This is a bona fide probability measure on \\((\\mathbb{R}, \\mathcal{B})\\) for each state \\(|\\psi\\rangle\\). Quantum measurement theory is measure theory in operator clothing.</p>
                    </div>
                </div>

                <h2>Economics: Expected Utility as Lebesgue Integration</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Decision Theory)</div>
                    <div class="env-body">
                        <p>In mathematical economics, a decision-maker facing uncertainty evaluates prospects using <strong>expected utility</strong>:</p>
                        \\[U(\\text{lottery}) = \\int_{\\Omega} u(\\omega)\\,dP(\\omega),\\]
                        <p>where \\(u: \\Omega \\to \\mathbb{R}\\) is a utility function and \\(P\\) is a probability measure over states of the world. This is a Lebesgue integral. The von Neumann-Morgenstern theorem (1944) shows that any preference relation satisfying certain axioms can be represented in this form.</p>
                        <p>Modern applications include:</p>
                        <ul>
                            <li><strong>Discrete choice models:</strong> McFadden's random utility framework, where choice probabilities are integrals over unobserved heterogeneity.</li>
                            <li><strong>Financial mathematics:</strong> Risk-neutral pricing uses a change of measure (Girsanov's theorem), which is the Radon-Nikodym derivative at work.</li>
                            <li><strong>Game theory:</strong> Mixed strategies are probability measures on action spaces.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Measure Theory is Not Optional)</div>
                    <div class="env-body">
                        <p>Without measure theory, one cannot rigorously state or prove the Law of Large Numbers, the Central Limit Theorem, the existence of conditional expectations, the pricing formulas of mathematical finance, or the convergence of MCMC algorithms. Any serious engagement with probability, statistics, physics, or mathematical economics requires measure-theoretic foundations.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Unifying Theme)</div>
                    <div class="env-body">
                        <p>Across all these applications, the same abstract structure appears: a sigma-algebra describes "what can be observed or measured," a measure assigns "sizes" or "probabilities" to these observations, and integration computes "aggregates" (expected values, total charge, total utility). Mastering the abstract framework once gives you the tools for all of these domains simultaneously.</p>
                    </div>
                </div>

                <div class="bridge closing-bridge">
                    <p><strong>Looking ahead.</strong> With the motivation complete, we are ready to build. Chapter 1 develops sigma-algebras and the Borel sets, the first pillar. Chapter 2 introduces abstract measures. Chapter 3 shows how to <em>construct</em> measures from scratch using Caratheodory's extension theorem. Chapter 4 applies this machinery to produce Lebesgue measure, the crown jewel that resolves the problem of "length" with which we began.</p>
                    <p><strong>Reference alignment:</strong> This motivational chapter draws on Folland 1.1; Royden-Fitzpatrick 1.1, 3.1; Stein-Shakarchi III.1-III.2.</p>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'In the measure-probability dictionary, what is the probabilistic analogue of the statement "a measurable function \\(f\\) is integrable (i.e., \\(\\int |f|\\,d\\mu &lt; \\infty\\))"?',
                    hint: 'Translate each term: measurable function = random variable, integral = expectation, |f| = |X|.',
                    solution: 'The probabilistic analogue is: "a random variable \\(X\\) has finite first moment (i.e., \\(E[|X|] < \\infty\\))." In probability, this is the condition for the expected value \\(E[X]\\) to be well-defined and finite.'
                },
                {
                    question: 'Why can we not define \\(P(X = x)\\) for a continuous random variable \\(X\\) and use it to compute expectations via \\(E[X] = \\sum_x x \\cdot P(X = x)\\)?',
                    hint: 'What is \\(P(X = x)\\) for a continuous random variable? What kind of "sum" would be needed?',
                    solution: 'For a continuous random variable, \\(P(X = x) = 0\\) for every individual value \\(x\\). So the "sum" \\(\\sum_x x \\cdot P(X = x) = \\sum_x 0 = 0\\), which is wrong. The correct computation requires integration against a probability density function: \\(E[X] = \\int x \\cdot f(x)\\,dx\\). This integral is a Lebesgue integral with respect to Lebesgue measure (or, equivalently, integration against the distribution measure \\(\\mu_X\\)). This is precisely why measure-theoretic integration is necessary for probability.'
                },
                {
                    question: '(Exploration) Consider two different probability measures on \\(([0,1], \\mathcal{B}([0,1]))\\): Lebesgue measure \\(\\lambda\\) and the Cantor measure \\(\\mu_C\\) (the distribution of the Cantor function applied to a uniform random variable). Both are non-atomic (no point has positive mass). Are they "the same" from a measure-theoretic perspective? What distinguishes them?',
                    hint: 'Consider whether \\(\\mu_C\\) is absolutely continuous with respect to \\(\\lambda\\). What is the support of \\(\\mu_C\\)?',
                    solution: 'Both \\(\\lambda\\) and \\(\\mu_C\\) are non-atomic probability measures on \\([0,1]\\), but they are fundamentally different. The Cantor measure \\(\\mu_C\\) is concentrated on the Cantor set \\(\\mathcal{C}\\), which has Lebesgue measure zero. So \\(\\mu_C(\\mathcal{C}) = 1\\) while \\(\\lambda(\\mathcal{C}) = 0\\). This means \\(\\mu_C\\) is <em>singular</em> with respect to \\(\\lambda\\) (\\(\\mu_C \\perp \\lambda\\)). In particular, \\(\\mu_C\\) is <em>not</em> absolutely continuous w.r.t. \\(\\lambda\\), so it has no density function. This is an example of a continuous singular measure, falling between discrete measures (sums of point masses) and absolutely continuous measures (those with densities). The Lebesgue Decomposition Theorem (Chapter 11) makes this classification precise.'
                },
                {
                    question: 'The von Neumann-Morgenstern expected utility formula \\(U = \\int u(\\omega)\\,dP(\\omega)\\) uses a Lebesgue integral. Give an example where a Riemann integral would fail to compute the expected utility.',
                    hint: 'Construct a utility function that is discontinuous on a set of positive measure, or a probability measure that is not absolutely continuous.',
                    solution: 'Consider an agent whose utility depends on the realization of a continuous random variable \\(X\\) on \\([0,1]\\), but with a "fairness threshold": \\(u(x) = 1\\) if \\(x\\) is irrational (representing an acceptable outcome) and \\(u(x) = 0\\) if \\(x\\) is rational (representing an unfair outcome). Then \\(u = \\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}\\), which is the complement of the Dirichlet function. Under Lebesgue measure (uniform distribution), \\(E[u(X)] = \\int_0^1 \\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}\\,d\\lambda = 1\\) (since the rationals have measure zero). But \\(u\\) is not Riemann integrable (discontinuous everywhere). The Lebesgue integral handles this effortlessly.'
                },
                {
                    question: 'Explain why the spectral theorem in quantum mechanics requires Borel measures on \\(\\mathbb{R}\\) rather than just Riemann integration.',
                    hint: 'Consider an observable with a purely discrete spectrum and one with a continuous spectrum. What kind of measure describes each?',
                    solution: 'A discrete observable (e.g., spin) has a spectral measure that is a sum of Dirac masses: \\(E = \\sum_n |n\\rangle\\langle n| \\cdot \\delta_{\\lambda_n}\\). A continuous observable (e.g., position) has a spectral measure absolutely continuous w.r.t. Lebesgue measure. Mixed spectra combine both. This zoo of measures, including singular continuous spectra (related to Cantor-like measures), demands the full generality of Borel measures. Riemann integration can only handle the absolutely continuous case.'
                },
                {
                    question: 'Summarize in one sentence why measure theory exists, based on what you learned in this chapter.',
                    hint: 'Think about what goes wrong without it and what it provides.',
                    solution: 'Measure theory exists because naive notions of "size" are inconsistent on all subsets of \\(\\mathbb{R}\\) (Vitali), the Riemann integral is too restrictive for modern analysis, and a unified framework of sigma-algebras, measures, and Lebesgue integration resolves both problems while simultaneously providing rigorous foundations for probability, physics, and economics.'
                }
            ]
        }
    ]
});
