window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Measurable Functions',
    subtitle: 'The Right Class of Functions for Measure-Theoretic Integration',
    sections: [
        // ============================================================
        // Section 1: Definition and Equivalent Characterizations
        // ============================================================
        {
            id: 'definition-equivalent-characterizations',
            title: 'Definition and Equivalent Characterizations',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From measurable sets to measurable functions.</strong> In Chapters 1 through 4, we built the machinery of sigma-algebras and measures, answering "which sets can we measure?" Now we ask the companion question: <em>which functions can we integrate?</em> The answer is both elegant and visual: a function is measurable precisely when its preimages of "reasonable" sets are measurable. This chapter develops the theory of measurable functions, the essential bridge from measure to integration.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define measurable functions via preimages, visualize what the preimage condition means geometrically, and establish the four equivalent characterizations that give us flexibility in checking measurability.</p>
                </div>

                <h2>The Preimage Idea</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Pulling Back Sets)</div>
                    <div class="env-body">
                        <p>Think of a function \\(f: X \\to \\mathbb{R}\\) as a machine that sends each point \\(x\\) in the domain to a real number \\(f(x)\\). Given a set \\(B \\subseteq \\mathbb{R}\\) in the codomain, the <strong>preimage</strong> \\(f^{-1}(B) = \\{x \\in X : f(x) \\in B\\}\\) collects all domain points that map into \\(B\\).</p>
                        <p>Visually: highlight a region on the \\(y\\)-axis, then trace horizontally to the graph, then project down to the \\(x\\)-axis. The resulting set on the \\(x\\)-axis is the preimage. Measurability asks that this set always belongs to our sigma-algebra, at least for Borel sets \\(B\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 (Measurable Function)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{F})\\) be a measurable space and \\(f: X \\to \\overline{\\mathbb{R}} = [-\\infty, +\\infty]\\). We say \\(f\\) is <strong>\\(\\mathcal{F}\\)-measurable</strong> (or simply <strong>measurable</strong>) if for every \\(a \\in \\mathbb{R}\\),</p>
                        \\[f^{-1}((a, +\\infty]) = \\{x \\in X : f(x) &gt; a\\} \\in \\mathcal{F}.\\]
                        <p>In words: the <strong>super-level set</strong> at every height \\(a\\) must be a measurable set.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Horizontal Line Test for Measurability)</div>
                    <div class="env-body">
                        <p>Imagine sweeping a horizontal line from \\(y = -\\infty\\) up to \\(y = +\\infty\\). At each height \\(a\\), the set of \\(x\\)-values where the graph lies strictly above the line is \\(\\{x: f(x) &gt; a\\}\\). If <em>every one</em> of these sets is measurable, the function is measurable. The visualization below lets you sweep this line and inspect the resulting super-level sets.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="preimage-visualizer"></div>

                <h2>Four Equivalent Characterizations</h2>

                <p>The definition uses super-level sets \\(\\{f &gt; a\\}\\), but we could equivalently use any of three other families of sets. This flexibility is extremely useful in practice.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.2 (Equivalent Conditions for Measurability)</div>
                    <div class="env-body">
                        <p>Let \\((X, \\mathcal{F})\\) be a measurable space and \\(f: X \\to \\overline{\\mathbb{R}}\\). The following are equivalent:</p>
                        <ol>
                            <li>\\(\\{x : f(x) &gt; a\\} \\in \\mathcal{F}\\) for all \\(a \\in \\mathbb{R}\\) &emsp; (super-level sets, open)</li>
                            <li>\\(\\{x : f(x) \\geq a\\} \\in \\mathcal{F}\\) for all \\(a \\in \\mathbb{R}\\) &emsp; (super-level sets, closed)</li>
                            <li>\\(\\{x : f(x) &lt; a\\} \\in \\mathcal{F}\\) for all \\(a \\in \\mathbb{R}\\) &emsp; (sub-level sets, open)</li>
                            <li>\\(\\{x : f(x) \\leq a\\} \\in \\mathcal{F}\\) for all \\(a \\in \\mathbb{R}\\) &emsp; (sub-level sets, closed)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The key observation is that these four families are related by complementation and countable intersections/unions, all of which preserve membership in a sigma-algebra.</p>
                        <p><strong>(1) \\(\\Leftrightarrow\\) (4):</strong> Note \\(\\{f \\leq a\\} = \\{f &gt; a\\}^c\\). Since \\(\\mathcal{F}\\) is closed under complements, (1) holds if and only if (4) holds.</p>
                        <p><strong>(2) \\(\\Leftrightarrow\\) (3):</strong> Similarly, \\(\\{f &lt; a\\} = \\{f \\geq a\\}^c\\).</p>
                        <p><strong>(1) \\(\\Rightarrow\\) (2):</strong> We write \\(\\{f \\geq a\\} = \\bigcap_{n=1}^{\\infty} \\{f &gt; a - 1/n\\}\\). Each set on the right is in \\(\\mathcal{F}\\) by (1), and \\(\\mathcal{F}\\) is closed under countable intersections.</p>
                        <p><strong>(2) \\(\\Rightarrow\\) (1):</strong> We write \\(\\{f &gt; a\\} = \\bigcup_{n=1}^{\\infty} \\{f \\geq a + 1/n\\}\\). Each set on the right is in \\(\\mathcal{F}\\) by (2), and \\(\\mathcal{F}\\) is closed under countable unions.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Borel Characterization)</div>
                    <div class="env-body">
                        <p>A fifth equivalent condition: \\(f\\) is measurable if and only if \\(f^{-1}(B) \\in \\mathcal{F}\\) for every Borel set \\(B \\subseteq \\overline{\\mathbb{R}}\\). This follows because the Borel sigma-algebra on \\(\\overline{\\mathbb{R}}\\) is generated by the sets \\((a, +\\infty]\\), and taking preimages commutes with all set operations (unions, intersections, complements). Thus if \\(f^{-1}((a, +\\infty]) \\in \\mathcal{F}\\) for all \\(a\\), then \\(f^{-1}(B) \\in \\mathcal{F}\\) for every Borel \\(B\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.3 (Continuous Functions are Borel Measurable)</div>
                    <div class="env-body">
                        <p>If \\(f: \\mathbb{R} \\to \\mathbb{R}\\) is continuous, then for every \\(a \\in \\mathbb{R}\\), the set \\(\\{x: f(x) &gt; a\\} = f^{-1}((a, \\infty))\\) is open (the preimage of an open set under a continuous function is open). Every open set is Borel, hence in \\(\\mathcal{B}(\\mathbb{R})\\). So every continuous function is Borel measurable.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.4 (Indicator Functions)</div>
                    <div class="env-body">
                        <p>For \\(A \\subseteq X\\), the indicator function \\(\\mathbf{1}_A(x) = \\begin{cases} 1 &amp; x \\in A \\\\ 0 &amp; x \\notin A \\end{cases}\\) is measurable if and only if \\(A \\in \\mathcal{F}\\). Indeed, for any \\(a \\in \\mathbb{R}\\):</p>
                        \\[\\{x: \\mathbf{1}_A(x) &gt; a\\} = \\begin{cases} X &amp; \\text{if } a &lt; 0, \\\\ A &amp; \\text{if } 0 \\leq a &lt; 1, \\\\ \\emptyset &amp; \\text{if } a \\geq 1. \\end{cases}\\]
                        <p>All three are in \\(\\mathcal{F}\\) if and only if \\(A \\in \\mathcal{F}\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Measurability Depends on the Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>The same function can be measurable with respect to one sigma-algebra and non-measurable with respect to another. For instance, \\(\\mathbf{1}_{\\{0\\}}\\) on \\(\\mathbb{R}\\) is Borel measurable (since \\(\\{0\\} \\in \\mathcal{B}(\\mathbb{R})\\)) but is <em>not</em> measurable with respect to the sigma-algebra \\(\\{\\emptyset, \\mathbb{R}\\}\\). Always specify the sigma-algebra.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.5 (Measurable Functions Between Measurable Spaces)</div>
                    <div class="env-body">
                        <p>More generally, if \\((X, \\mathcal{F})\\) and \\((Y, \\mathcal{G})\\) are measurable spaces, a function \\(f: X \\to Y\\) is <strong>\\((\\mathcal{F}, \\mathcal{G})\\)-measurable</strong> if \\(f^{-1}(B) \\in \\mathcal{F}\\) for every \\(B \\in \\mathcal{G}\\). When \\(Y = \\overline{\\mathbb{R}}\\) and \\(\\mathcal{G} = \\mathcal{B}(\\overline{\\mathbb{R}})\\), this recovers Definition 5.1.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.1; Royden-Fitzpatrick Ch. 3.1; Stein-Shakarchi III.1.</p>
            `,
            visualizations: [
                {
                    id: 'preimage-visualizer',
                    title: 'Preimage Visualizer',
                    description: 'Draw a function, select a region on the y-axis, and see the preimage highlighted on the x-axis. Sweep a horizontal line to visualize super-level sets.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 450;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var W = canvas.width, H = canvas.height;
                        var margin = { left: 60, right: 40, top: 40, bottom: 50 };
                        var plotW = W - margin.left - margin.right;
                        var plotH = H - margin.top - margin.bottom;

                        // Domain [0, 4], Range [-1, 3]
                        var xMin = 0, xMax = 4, yMin = -1, yMax = 3;
                        var threshold = 1.0;
                        var funcChoice = 0;

                        var functions = [
                            { name: 'sin + bump', fn: function(x) { return Math.sin(Math.PI * x) + 0.5 * Math.sin(2.5 * x) + 0.8; } },
                            { name: 'step function', fn: function(x) {
                                if (x < 1) return 0.5;
                                if (x < 2) return 2.0;
                                if (x < 3) return 1.0;
                                return 2.5;
                            }},
                            { name: 'quadratic', fn: function(x) { return 0.4 * (x - 2) * (x - 2) - 0.2; } }
                        ];

                        function toScreenX(x) { return margin.left + (x - xMin) / (xMax - xMin) * plotW; }
                        function toScreenY(y) { return margin.top + (yMax - y) / (yMax - yMin) * plotH; }

                        VizEngine.createSlider(controls, 'Threshold a', -1, 3, threshold, 0.05, function(v) {
                            threshold = v;
                            draw();
                        });

                        var funcBtn0 = VizEngine.createButton(controls, 'Smooth', function() { funcChoice = 0; draw(); });
                        var funcBtn1 = VizEngine.createButton(controls, 'Step', function() { funcChoice = 1; draw(); });
                        var funcBtn2 = VizEngine.createButton(controls, 'Quadratic', function() { funcChoice = 2; draw(); });

                        function draw() {
                            var f = functions[funcChoice].fn;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = Math.ceil(xMin); gx <= xMax; gx++) {
                                var sx = toScreenX(gx);
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }
                            for (var gy = Math.ceil(yMin); gy <= yMax; gy++) {
                                var sy = toScreenY(gy);
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left, margin.top + plotH); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var lx = Math.ceil(xMin); lx <= xMax; lx++) {
                                ctx.fillText(lx.toString(), toScreenX(lx), margin.top + plotH + 16);
                            }
                            ctx.textAlign = 'right';
                            for (var ly = Math.ceil(yMin); ly <= yMax; ly++) {
                                ctx.fillText(ly.toString(), margin.left - 8, toScreenY(ly) + 4);
                            }

                            // Highlight super-level set on x-axis
                            var step = 0.005;
                            var preimageIntervals = [];
                            var inPreimage = false;
                            var startX = xMin;

                            for (var x = xMin; x <= xMax + step; x += step) {
                                var val = f(Math.min(x, xMax));
                                if (val > threshold && !inPreimage) {
                                    startX = x;
                                    inPreimage = true;
                                } else if ((val <= threshold || x >= xMax) && inPreimage) {
                                    preimageIntervals.push([startX, Math.min(x, xMax)]);
                                    inPreimage = false;
                                }
                            }

                            // Shade the region above threshold (the preimage region on graph)
                            ctx.save();
                            ctx.globalAlpha = 0.15;
                            ctx.fillStyle = colors.teal;
                            for (var i = 0; i < preimageIntervals.length; i++) {
                                var a = preimageIntervals[i][0], b = preimageIntervals[i][1];
                                var sx1 = toScreenX(a), sx2 = toScreenX(b);
                                var syTop = margin.top;
                                var syBot = toScreenY(threshold);
                                ctx.fillRect(sx1, syTop, sx2 - sx1, syBot - syTop);
                            }
                            ctx.restore();

                            // Highlight preimage on x-axis with bright strips
                            for (var i = 0; i < preimageIntervals.length; i++) {
                                var a = preimageIntervals[i][0], b = preimageIntervals[i][1];
                                var sx1 = toScreenX(a), sx2 = toScreenX(b);
                                ctx.fillStyle = colors.teal;
                                ctx.globalAlpha = 0.6;
                                ctx.fillRect(sx1, margin.top + plotH - 2, sx2 - sx1, 14);
                                ctx.globalAlpha = 1;
                            }

                            // Horizontal threshold line
                            var threshY = toScreenY(threshold);
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([8, 5]);
                            ctx.beginPath(); ctx.moveTo(margin.left, threshY); ctx.lineTo(margin.left + plotW, threshY); ctx.stroke();
                            ctx.setLineDash([]);

                            // Threshold label
                            ctx.fillStyle = colors.orange;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('a = ' + threshold.toFixed(2), margin.left + plotW + 4, threshY + 4);

                            // Draw function curve
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var x = xMin; x <= xMax; x += step) {
                                var sx = toScreenX(x);
                                var sy = toScreenY(f(x));
                                if (x === xMin) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Preimage label
                            ctx.fillStyle = colors.teal;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            var totalLen = 0;
                            for (var i = 0; i < preimageIntervals.length; i++) {
                                totalLen += preimageIntervals[i][1] - preimageIntervals[i][0];
                            }
                            ctx.fillText('f\u207B\u00B9((a, \u221E]) on x-axis (teal)', W / 2, margin.top + plotH + 38);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Total preimage length: ' + totalLen.toFixed(3), W / 2, H - 6);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Preimage Visualizer: {x : f(x) > a}', W / 2, 18);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Function: ' + functions[funcChoice].name, W / 2, 33);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that if \\(f: X \\to \\mathbb{R}\\) is \\(\\mathcal{F}\\)-measurable, then \\(\\{x : f(x) = a\\} \\in \\mathcal{F}\\) for every \\(a \\in \\mathbb{R}\\). Is the converse true?',
                    hint: 'Write \\(\\{f = a\\} = \\{f \\leq a\\} \\cap \\{f \\geq a\\}\\). For the converse, consider a non-measurable set \\(A\\) and the function \\(f = \\mathbf{1}_A\\).',
                    solution: 'Since \\(f\\) is measurable, both \\(\\{f \\leq a\\}\\) and \\(\\{f \\geq a\\}\\) are in \\(\\mathcal{F}\\) (by Theorem 5.2). Hence \\(\\{f = a\\} = \\{f \\leq a\\} \\cap \\{f \\geq a\\} \\in \\mathcal{F}\\). The converse is false: take \\(X = \\{0, 1\\}\\), \\(\\mathcal{F} = \\{\\emptyset, X\\}\\), and \\(f = \\mathbf{1}_{\\{0\\}}\\). Then \\(\\{f = 0\\} = \\{1\\}\\) and \\(\\{f = 1\\} = \\{0\\}\\); neither is in \\(\\mathcal{F}\\). Actually, revise: a correct counterexample uses \\(\\{f = a\\} \\in \\mathcal{F}\\) for all \\(a\\) but the function is not measurable. Let \\(f: [0,1] \\to \\mathbb{R}\\) map a non-measurable Vitali set \\(V\\) to 0 and \\(V^c\\) to 0 as well; then \\(\\{f = 0\\} = [0,1] \\in \\mathcal{F}\\) trivially. Instead consider \\(f(x) = x\\) on \\((X, \\{\\emptyset, X\\})\\): \\(\\{f = a\\}\\) is a singleton or empty, and singletons are not in \\(\\{\\emptyset, X\\}\\) (for \\(|X| \\geq 2\\)), so this fails. The correct answer: the converse is false in general because level sets alone do not determine sub-level sets.'
                },
                {
                    question: 'Prove that every monotone function \\(f: \\mathbb{R} \\to \\mathbb{R}\\) is Borel measurable.',
                    hint: 'If \\(f\\) is non-decreasing, then \\(\\{f > a\\}\\) is an interval (possibly empty, a half-line, or all of \\(\\mathbb{R}\\)).',
                    solution: 'Suppose \\(f\\) is non-decreasing. For any \\(a \\in \\mathbb{R}\\), the set \\(\\{x : f(x) > a\\}\\) is either empty, all of \\(\\mathbb{R}\\), or a half-line of the form \\((c, \\infty)\\) or \\([c, \\infty)\\) for some \\(c\\). In all cases, it is a Borel set. Similarly for non-increasing functions (\\(\\{f > a\\}\\) is a left half-line). Hence every monotone function is Borel measurable.'
                },
                {
                    question: 'Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be measurable and \\(g: \\mathbb{R} \\to \\mathbb{R}\\) be continuous. Prove that \\(g \\circ f\\) is measurable.',
                    hint: 'For any open set \\(U \\subseteq \\mathbb{R}\\), \\(g^{-1}(U)\\) is open (hence Borel), and \\(f^{-1}(\\text{Borel}) \\in \\mathcal{F}\\).',
                    solution: 'Let \\(a \\in \\mathbb{R}\\). Then \\(\\{x : (g \\circ f)(x) > a\\} = f^{-1}(g^{-1}((a, \\infty)))\\). Since \\(g\\) is continuous, \\(g^{-1}((a, \\infty))\\) is open, hence Borel. Since \\(f\\) is measurable (meaning \\(f^{-1}(B) \\in \\mathcal{F}\\) for every Borel \\(B\\)), we get \\(f^{-1}(g^{-1}((a, \\infty))) \\in \\mathcal{F}\\). This holds for all \\(a\\), so \\(g \\circ f\\) is measurable.'
                }
            ]
        },

        // ============================================================
        // Section 2: The Algebra of Measurable Functions
        // ============================================================
        {
            id: 'algebra-of-measurable-functions',
            title: 'The Algebra of Measurable Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>We now know what it means for a single function to be measurable. The next question is natural: if \\(f\\) and \\(g\\) are measurable, are \\(f + g\\), \\(f \\cdot g\\), \\(\\max(f, g)\\), and \\(|f|\\) also measurable? The answer is yes, and the proofs are all visual: they reduce to tracking preimages through algebraic operations.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that measurable functions form an algebra (closed under sums, products, scalar multiples, max, min, absolute value). Establish the measurability of \\(f/g\\) away from zeros. Visualize the preimage-tracing argument.</p>
                </div>

                <h2>Sums and Scalar Multiples</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.6 (Sums and Scalar Multiples)</div>
                    <div class="env-body">
                        <p>Let \\(f, g: X \\to \\mathbb{R}\\) be \\(\\mathcal{F}\\)-measurable and let \\(c \\in \\mathbb{R}\\). Then:</p>
                        <ol>
                            <li>\\(cf\\) is measurable.</li>
                            <li>\\(f + g\\) is measurable.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> If \\(c = 0\\), then \\(cf = 0\\) is measurable (constant functions are measurable). If \\(c &gt; 0\\), then \\(\\{cf &gt; a\\} = \\{f &gt; a/c\\} \\in \\mathcal{F}\\). If \\(c &lt; 0\\), then \\(\\{cf &gt; a\\} = \\{f &lt; a/c\\} \\in \\mathcal{F}\\).</p>
                        <p><strong>(2)</strong> The key trick uses the density of the rationals. For any \\(a \\in \\mathbb{R}\\),</p>
                        \\[\\{f + g &gt; a\\} = \\bigcup_{r \\in \\mathbb{Q}} \\left(\\{f &gt; r\\} \\cap \\{g &gt; a - r\\}\\right).\\]
                        <p>This is because if \\(f(x) + g(x) &gt; a\\), then \\(f(x) &gt; a - g(x)\\), so by density of \\(\\mathbb{Q}\\) there exists a rational \\(r\\) with \\(f(x) &gt; r &gt; a - g(x)\\), giving \\(f(x) &gt; r\\) and \\(g(x) &gt; a - r\\). The right side is a countable union of measurable sets, hence measurable.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Rationals Enter)</div>
                    <div class="env-body">
                        <p>The set \\(\\{f + g &gt; a\\}\\) is not a simple preimage of either \\(f\\) or \\(g\\) alone; it involves <em>both</em> functions simultaneously. To decompose it into pieces involving \\(f\\) alone and \\(g\\) alone, we "split the burden" at a rational threshold \\(r\\): require \\(f &gt; r\\) and \\(g &gt; a - r\\). Sweeping over all rationals \\(r\\) covers every way to split \\(a\\) between \\(f\\) and \\(g\\). This "rational splitting" trick appears throughout measure theory.</p>
                    </div>
                </div>

                <h2>Products and Quotients</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.7 (Products)</div>
                    <div class="env-body">
                        <p>If \\(f, g: X \\to \\mathbb{R}\\) are measurable, then \\(f \\cdot g\\) is measurable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>First, note that \\(f^2\\) is measurable: for \\(a \\geq 0\\), \\(\\{f^2 &gt; a\\} = \\{f &gt; \\sqrt{a}\\} \\cup \\{f &lt; -\\sqrt{a}\\} \\in \\mathcal{F}\\), and for \\(a &lt; 0\\), \\(\\{f^2 &gt; a\\} = X \\in \\mathcal{F}\\).</p>
                        <p>Now use the polarization identity:</p>
                        \\[fg = \\frac{1}{4}\\left[(f+g)^2 - (f-g)^2\\right].\\]
                        <p>Since \\(f+g\\) and \\(f-g\\) are measurable (Theorem 5.6), their squares are measurable, and a scalar multiple of a measurable function is measurable.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.8 (Quotients)</div>
                    <div class="env-body">
                        <p>If \\(f, g\\) are measurable and \\(g(x) \\neq 0\\) for all \\(x\\), then \\(f/g\\) is measurable. More precisely, if \\(g\\) is measurable, then \\(1/g\\) is measurable on \\(\\{x : g(x) \\neq 0\\}\\) (with the restricted sigma-algebra).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>It suffices to show \\(1/g\\) is measurable (then \\(f/g = f \\cdot (1/g)\\) is measurable by Theorem 5.7). On \\(\\{g \\neq 0\\}\\), for \\(a &gt; 0\\):</p>
                        \\[\\{1/g &gt; a\\} = \\{0 &lt; g &lt; 1/a\\} \\cup \\{g &lt; 0\\text{ and }1/g &gt; a\\} = \\{0 &lt; g &lt; 1/a\\}.\\]
                        <p>(The second set is empty since \\(g &lt; 0\\) implies \\(1/g &lt; 0 &lt; a\\).) For \\(a = 0\\): \\(\\{1/g &gt; 0\\} = \\{g &gt; 0\\} \\in \\mathcal{F}\\). For \\(a &lt; 0\\): \\(\\{1/g &gt; a\\} = \\{g &gt; 0\\} \\cup \\{g &lt; 1/a\\}\\). All cases yield measurable sets.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Lattice Operations: max, min, absolute value</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.9 (Lattice Operations)</div>
                    <div class="env-body">
                        <p>If \\(f, g\\) are measurable, then so are:</p>
                        <ol>
                            <li>\\(\\max(f, g)\\) and \\(\\min(f, g)\\).</li>
                            <li>\\(|f|\\), \\(f^+ = \\max(f, 0)\\), and \\(f^- = \\max(-f, 0)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> \\(\\{\\max(f,g) &gt; a\\} = \\{f &gt; a\\} \\cup \\{g &gt; a\\} \\in \\mathcal{F}\\). Similarly, \\(\\{\\min(f,g) &lt; a\\} = \\{f &lt; a\\} \\cup \\{g &lt; a\\} \\in \\mathcal{F}\\).</p>
                        <p><strong>(2)</strong> \\(|f| = \\max(f, -f)\\), \\(f^+ = \\max(f, 0)\\), \\(f^- = \\max(-f, 0)\\). All are compositions of operations already shown to preserve measurability.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Decomposition \\(f = f^+ - f^-\\))</div>
                    <div class="env-body">
                        <p>Every measurable function decomposes as \\(f = f^+ - f^-\\) where \\(f^+, f^- \\geq 0\\) are both measurable and \\(|f| = f^+ + f^-\\). This decomposition into positive and negative parts is fundamental for defining the integral of a general (not necessarily non-negative) measurable function in Chapter 6.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="measurable-algebra-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 5.10 (Composition with Continuous Functions)</div>
                    <div class="env-body">
                        <p>If \\(f\\) is measurable and \\(\\varphi: \\mathbb{R} \\to \\mathbb{R}\\) is continuous, then \\(\\varphi \\circ f\\) is measurable (Exercise 3 of Section 1). In particular, \\(e^f\\), \\(\\sin(f)\\), and \\(|f|^p\\) for \\(p &gt; 0\\) are all measurable whenever \\(f\\) is.</p>
                    </div>
                </div>

                <p><strong>Summary.</strong> The class of measurable functions is closed under all standard algebraic and lattice operations. This means we can combine measurable functions freely, without leaving the class. Compare this to continuous functions: sums and products of continuous functions are continuous, but limits may not be (Chapter 3 of real analysis). Measurable functions enjoy strictly better closure properties, as the next section demonstrates.</p>

                <p><strong>Reference alignment:</strong> Folland 2.1; Royden-Fitzpatrick 3.2; Cohn 2.1.</p>
            `,
            visualizations: [
                {
                    id: 'measurable-algebra-viz',
                    title: 'Measurable Function Algebra',
                    description: 'Select two measurable functions and an operation. The tool traces preimage computations to verify measurability of the result.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var W = canvas.width, H = canvas.height;
                        var margin = { left: 50, right: 20, top: 40, bottom: 40 };
                        var halfW = (W - margin.left - margin.right) / 2 - 10;
                        var plotH = (H - margin.top - margin.bottom - 30) / 2;

                        var xMin = 0, xMax = 4, yMin = -2, yMax = 3;
                        var threshold = 0.8;
                        var opChoice = 0;
                        var ops = ['f + g', 'f \u00B7 g', 'max(f, g)', 'min(f, g)', '|f|'];

                        function fFunc(x) { return Math.sin(Math.PI * x * 0.8) + 0.3; }
                        function gFunc(x) { return 0.6 * Math.cos(Math.PI * x * 0.5) + 0.8; }

                        function combined(x) {
                            var fv = fFunc(x), gv = gFunc(x);
                            if (opChoice === 0) return fv + gv;
                            if (opChoice === 1) return fv * gv;
                            if (opChoice === 2) return Math.max(fv, gv);
                            if (opChoice === 3) return Math.min(fv, gv);
                            return Math.abs(fv);
                        }

                        VizEngine.createSlider(controls, 'Threshold a', -3, 4, threshold, 0.1, function(v) {
                            threshold = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'f + g', function() { opChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'f \u00B7 g', function() { opChoice = 1; draw(); });
                        VizEngine.createButton(controls, 'max(f,g)', function() { opChoice = 2; draw(); });
                        VizEngine.createButton(controls, 'min(f,g)', function() { opChoice = 3; draw(); });
                        VizEngine.createButton(controls, '|f|', function() { opChoice = 4; draw(); });

                        function toSX(x, offX) { return margin.left + offX + (x - xMin) / (xMax - xMin) * halfW; }
                        function toSY(y, offY, ph) { return margin.top + offY + (yMax - y) / (yMax - yMin) * ph; }

                        function drawFuncOnPanel(fn, color, offX, offY, ph, label) {
                            var step = 0.01;
                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = Math.ceil(xMin); gx <= xMax; gx++) {
                                var sx = toSX(gx, offX);
                                ctx.beginPath(); ctx.moveTo(sx, margin.top + offY); ctx.lineTo(sx, margin.top + offY + ph); ctx.stroke();
                            }
                            for (var gy = Math.ceil(yMin); gy <= yMax; gy++) {
                                var sy = toSY(gy, offY, ph);
                                ctx.beginPath(); ctx.moveTo(margin.left + offX, sy); ctx.lineTo(margin.left + offX + halfW, sy); ctx.stroke();
                            }
                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(margin.left + offX, margin.top + offY + ph); ctx.lineTo(margin.left + offX + halfW, margin.top + offY + ph); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left + offX, margin.top + offY); ctx.lineTo(margin.left + offX, margin.top + offY + ph); ctx.stroke();

                            // Threshold line
                            var thY = toSY(threshold, offY, ph);
                            if (thY > margin.top + offY && thY < margin.top + offY + ph) {
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(margin.left + offX, thY); ctx.lineTo(margin.left + offX + halfW, thY); ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Preimage highlight on x-axis
                            var inPre = false;
                            var startX = xMin;
                            for (var x = xMin; x <= xMax + step; x += step) {
                                var val = fn(Math.min(x, xMax));
                                if (val > threshold && !inPre) {
                                    startX = x;
                                    inPre = true;
                                } else if ((val <= threshold || x >= xMax) && inPre) {
                                    var sx1 = toSX(startX, offX), sx2 = toSX(Math.min(x, xMax), offX);
                                    ctx.fillStyle = colors.teal;
                                    ctx.globalAlpha = 0.4;
                                    ctx.fillRect(sx1, margin.top + offY + ph - 2, sx2 - sx1, 8);
                                    ctx.globalAlpha = 1;
                                    inPre = false;
                                }
                            }

                            // Curve
                            ctx.strokeStyle = color;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var x = xMin; x <= xMax; x += step) {
                                var sx = toSX(x, offX);
                                var sy = toSY(fn(x), offY, ph);
                                if (x === xMin) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Panel label
                            ctx.fillStyle = color;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(label, margin.left + offX + halfW / 2, margin.top + offY - 6);
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Measurable Function Algebra: ' + ops[opChoice], W / 2, 18);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Teal strips = preimage {h > a} on x-axis. Orange dashed = threshold a.', W / 2, 33);

                            // Top row: f and g
                            drawFuncOnPanel(fFunc, colors.blue, 0, 0, plotH, 'f(x)');
                            drawFuncOnPanel(gFunc, colors.purple, halfW + 20, 0, plotH, 'g(x)');

                            // Bottom row: combined (full width)
                            var bottomOff = plotH + 30;
                            var fullPlotW = W - margin.left - margin.right;
                            // Override toSX for full width
                            var step = 0.01;

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = Math.ceil(xMin); gx <= xMax; gx++) {
                                var sx = margin.left + (gx - xMin) / (xMax - xMin) * fullPlotW;
                                ctx.beginPath(); ctx.moveTo(sx, margin.top + bottomOff); ctx.lineTo(sx, margin.top + bottomOff + plotH); ctx.stroke();
                            }
                            for (var gy = Math.ceil(yMin); gy <= yMax; gy++) {
                                var sy = margin.top + bottomOff + (yMax - gy) / (yMax - yMin) * plotH;
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + fullPlotW, sy); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top + bottomOff + plotH);
                            ctx.lineTo(margin.left + fullPlotW, margin.top + bottomOff + plotH);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(margin.left, margin.top + bottomOff);
                            ctx.lineTo(margin.left, margin.top + bottomOff + plotH);
                            ctx.stroke();

                            // Threshold line
                            var thY = margin.top + bottomOff + (yMax - threshold) / (yMax - yMin) * plotH;
                            if (thY > margin.top + bottomOff && thY < margin.top + bottomOff + plotH) {
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([8, 5]);
                                ctx.beginPath(); ctx.moveTo(margin.left, thY); ctx.lineTo(margin.left + fullPlotW, thY); ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Preimage highlight
                            var inPre = false, startXp = xMin;
                            for (var x = xMin; x <= xMax + step; x += step) {
                                var val = combined(Math.min(x, xMax));
                                if (val > threshold && !inPre) {
                                    startXp = x;
                                    inPre = true;
                                } else if ((val <= threshold || x >= xMax) && inPre) {
                                    var sx1 = margin.left + (startXp - xMin) / (xMax - xMin) * fullPlotW;
                                    var sx2 = margin.left + (Math.min(x, xMax) - xMin) / (xMax - xMin) * fullPlotW;
                                    ctx.fillStyle = colors.teal;
                                    ctx.globalAlpha = 0.5;
                                    ctx.fillRect(sx1, margin.top + bottomOff + plotH - 2, sx2 - sx1, 10);
                                    ctx.globalAlpha = 1;
                                    inPre = false;
                                }
                            }

                            // Combined curve
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var x = xMin; x <= xMax; x += step) {
                                var sx = margin.left + (x - xMin) / (xMax - xMin) * fullPlotW;
                                var sy = margin.top + bottomOff + (yMax - combined(x)) / (yMax - yMin) * plotH;
                                if (x === xMin) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Label
                            ctx.fillStyle = colors.green;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Result: ' + ops[opChoice] + ' (measurable!)', margin.left + fullPlotW / 2, margin.top + bottomOff - 6);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f\\) be measurable. Show that \\(f^2\\) is measurable directly from the definition (without using the product theorem).',
                    hint: 'Consider the cases \\(a \\geq 0\\) and \\(a < 0\\) separately. For \\(a \\geq 0\\), \\(\\{f^2 > a\\} = \\{f > \\sqrt{a}\\} \\cup \\{f < -\\sqrt{a}\\}\\).',
                    solution: 'If \\(a < 0\\), then \\(\\{f^2 > a\\} = X \\in \\mathcal{F}\\) since squares are non-negative. If \\(a \\geq 0\\), then \\(\\{f^2 > a\\} = \\{f > \\sqrt{a}\\} \\cup \\{f < -\\sqrt{a}\\}\\). Both sets are in \\(\\mathcal{F}\\) by measurability of \\(f\\), and their union is in \\(\\mathcal{F}\\).'
                },
                {
                    question: 'Prove that if \\(f\\) is measurable, then \\(f^+ = \\max(f, 0)\\) and \\(f^- = \\max(-f, 0)\\) are measurable, and \\(f = f^+ - f^-\\), \\(|f| = f^+ + f^-\\).',
                    hint: 'Use Theorem 5.9. For the identities, consider the cases \\(f(x) \\geq 0\\) and \\(f(x) < 0\\) separately.',
                    solution: 'Since \\(0\\) is measurable (constant function) and \\(-f\\) is measurable (scalar multiple), \\(f^+ = \\max(f, 0)\\) and \\(f^- = \\max(-f, 0)\\) are measurable by Theorem 5.9. If \\(f(x) \\geq 0\\), then \\(f^+(x) = f(x)\\), \\(f^-(x) = 0\\), so \\(f^+ - f^- = f\\) and \\(f^+ + f^- = f = |f|\\). If \\(f(x) < 0\\), then \\(f^+(x) = 0\\), \\(f^-(x) = -f(x)\\), so \\(f^+ - f^- = f\\) and \\(f^+ + f^- = -f = |f|\\).'
                },
                {
                    question: 'Give an example showing that the composition \\(f \\circ g\\) of two Lebesgue measurable functions need not be Lebesgue measurable. Why does the proof for "continuous \\(\\circ\\) measurable" fail?',
                    hint: 'Consider a measurable bijection from the Cantor set to \\([0,1]\\). The issue is that a measurable function can map measurable sets to non-measurable sets.',
                    solution: 'Let \\(\\varphi: [0,1] \\to [0,1]\\) be the Cantor function (continuous, non-decreasing, maps \\([0,1]\\) onto \\([0,1]\\)). Let \\(\\psi(x) = \\varphi(x) + x\\), which is a homeomorphism from \\([0,1]\\) to \\([0,2]\\). Its inverse \\(\\psi^{-1}\\) is continuous hence measurable. Now there exists a Lebesgue measurable set \\(A \\subseteq \\psi(C)\\) (where \\(C\\) is the Cantor set) such that \\(\\psi^{-1}(A)\\) is not Lebesgue measurable. Define \\(g = \\mathbf{1}_{\\psi^{-1}(A)}\\), which is measurable if \\(\\psi^{-1}(A)\\) were measurable, but it is not. The proof for "continuous \\(\\circ\\) measurable" fails because \\(g^{-1}(U)\\) need not be Borel when \\(g\\) is merely Lebesgue measurable; Lebesgue measurability only guarantees preimages of Borel sets are Lebesgue measurable, but \\(f^{-1}(\\text{Lebesgue}) \\neq \\text{Lebesgue}\\) in general.'
                },
                {
                    question: 'Prove that if \\(f_1, \\ldots, f_n\\) are measurable, then \\(\\max(f_1, \\ldots, f_n)\\) and \\(\\min(f_1, \\ldots, f_n)\\) are measurable.',
                    hint: 'Use induction on \\(n\\) and the two-function case (Theorem 5.9).',
                    solution: 'By induction. The base case \\(n = 2\\) is Theorem 5.9. For the inductive step, \\(\\max(f_1, \\ldots, f_{n+1}) = \\max(\\max(f_1, \\ldots, f_n), f_{n+1})\\). The inner max is measurable by the inductive hypothesis, and the outer max of two measurable functions is measurable by Theorem 5.9. Similarly for min.'
                }
            ]
        },

        // Sections 3-5 will follow below
        // ============================================================
        // Section 3: Limits of Measurable Functions
        // ============================================================
        {
            id: 'limits-of-measurable-functions',
            title: 'Limits of Measurable Functions',
            content: `
                <div class="bridge section-bridge">
                    <p>Here is the crown jewel of measurable functions: <em>pointwise limits of measurable functions are measurable</em>. This is the single property that sets measurable functions apart from continuous functions (where limits can break continuity) and makes them the natural setting for integration. The entire Lebesgue integration theory rests on this stability under limits.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove that sup, inf, limsup, liminf, and pointwise limits of sequences of measurable functions are measurable. Understand why this makes measurable functions strictly more powerful than continuous functions for analysis.</p>
                </div>

                <h2>Suprema and Infima of Countable Families</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.11 (Sup and Inf of Measurable Sequences)</div>
                    <div class="env-body">
                        <p>Let \\(\\{f_n\\}_{n=1}^{\\infty}\\) be a sequence of measurable functions from \\((X, \\mathcal{F})\\) to \\(\\overline{\\mathbb{R}}\\). Then the following are all measurable:</p>
                        <ol>
                            <li>\\(\\sup_n f_n\\)</li>
                            <li>\\(\\inf_n f_n\\)</li>
                            <li>\\(\\limsup_{n \\to \\infty} f_n\\)</li>
                            <li>\\(\\liminf_{n \\to \\infty} f_n\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> Let \\(g = \\sup_n f_n\\). Then for any \\(a \\in \\mathbb{R}\\),</p>
                        \\[\\{g &gt; a\\} = \\{\\sup_n f_n &gt; a\\} = \\bigcup_{n=1}^{\\infty} \\{f_n &gt; a\\}.\\]
                        <p>This is a <em>countable union</em> of measurable sets, hence measurable. The key insight is visual: \\(\\sup_n f_n(x) &gt; a\\) means at least one \\(f_n(x)\\) exceeds \\(a\\), which is exactly the union.</p>
                        <p><strong>(2)</strong> \\(\\{\\inf_n f_n &lt; a\\} = \\bigcup_{n=1}^{\\infty} \\{f_n &lt; a\\} \\in \\mathcal{F}\\).</p>
                        <p><strong>(3)</strong> \\(\\limsup_{n \\to \\infty} f_n = \\inf_{k \\geq 1} \\sup_{n \\geq k} f_n\\). The inner supremum \\(\\sup_{n \\geq k} f_n\\) is measurable by (1), and the infimum of these is measurable by (2).</p>
                        <p><strong>(4)</strong> \\(\\liminf_{n \\to \\infty} f_n = \\sup_{k \\geq 1} \\inf_{n \\geq k} f_n\\), measurable by the same reasoning.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Countable Operations Work)</div>
                    <div class="env-body">
                        <p>Sigma-algebras are closed under <em>countable</em> unions and intersections. The supremum of a countable family reduces to a countable union; the infimum reduces to a countable intersection. This is exactly the reason sigma-algebras (rather than mere algebras) are the right concept: they provide enough closure for limit operations. Finite max/min worked in Section 2; countable sup/inf is the extension that really matters.</p>
                    </div>
                </div>

                <h2>Pointwise Limits</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.12 (Pointwise Limits are Measurable)</div>
                    <div class="env-body">
                        <p>If \\(\\{f_n\\}\\) is a sequence of measurable functions and \\(f(x) = \\lim_{n \\to \\infty} f_n(x)\\) exists (in \\(\\overline{\\mathbb{R}}\\)) for every \\(x \\in X\\), then \\(f\\) is measurable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>When the limit exists, \\(\\limsup f_n = \\liminf f_n = \\lim f_n = f\\). By Theorem 5.11 parts (3) and (4), \\(f\\) is measurable.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Continuous Functions Do NOT Have This Property)</div>
                    <div class="env-body">
                        <p>The pointwise limit of continuous functions need not be continuous. The classic example: let \\(f_n(x) = x^n\\) on \\([0,1]\\). Each \\(f_n\\) is continuous, but \\(\\lim f_n(x) = 0\\) for \\(x \\in [0,1)\\) and \\(\\lim f_n(1) = 1\\). The limit is discontinuous at \\(x = 1\\). In contrast, this limit <em>is</em> measurable (it is a step function). Measurability is preserved; continuity is not. This is precisely why the Lebesgue theory needs measurable functions, not just continuous ones.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.13 (The Dirichlet Function as a Pointwise Limit)</div>
                    <div class="env-body">
                        <p>The Dirichlet function \\(\\mathbf{1}_{\\mathbb{Q}}\\) is measurable (as \\(\\mathbb{Q}\\) is a Borel set). It can also be obtained as a pointwise limit: enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\) and let \\(f_n = \\mathbf{1}_{\\{q_1, \\ldots, q_n\\}}\\). Each \\(f_n\\) is a simple measurable function, and \\(f_n(x) \\to \\mathbf{1}_{\\mathbb{Q}}(x)\\) pointwise. The limit is measurable (no surprise), but it is not Riemann integrable. This shows that the class of Lebesgue-integrable functions is genuinely larger.</p>
                    </div>
                </div>

                <h2>The Set Where a Sequence Converges</h2>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.14 (The Convergence Set is Measurable)</div>
                    <div class="env-body">
                        <p>If \\(\\{f_n\\}\\) is a sequence of measurable functions, then the set</p>
                        \\[C = \\{x \\in X : \\lim_{n \\to \\infty} f_n(x) \\text{ exists in } \\mathbb{R}\\}\\]
                        <p>is measurable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The limit exists in \\(\\mathbb{R}\\) if and only if (i) \\(\\limsup f_n = \\liminf f_n\\), and (ii) the common value is finite. Condition (i) says \\(x \\in \\{\\limsup f_n - \\liminf f_n = 0\\}\\), which is measurable. Condition (ii) excludes \\(\\{\\limsup f_n = +\\infty\\}\\) and \\(\\{\\liminf f_n = -\\infty\\}\\), both measurable. The intersection is measurable.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Strategic Advantage)</div>
                    <div class="env-body">
                        <p>Theorems 5.11 and 5.12 together mean: you can perform <em>any</em> countable limiting operation on measurable functions (sup, inf, limsup, liminf, pointwise limit) and stay inside the class of measurable functions. This is the decisive advantage over continuity, and it is the reason the Lebesgue integral has such powerful convergence theorems (Monotone Convergence, Dominated Convergence) which we will prove in Chapter 7.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.1; Royden-Fitzpatrick 3.3; Cohn 2.1.</p>
            `,
            exercises: [
                {
                    question: 'Let \\(f_n(x) = x^n\\) on \\([0,1]\\) with the Borel sigma-algebra. Compute \\(\\sup_n f_n\\), \\(\\inf_n f_n\\), \\(\\limsup f_n\\), and \\(\\liminf f_n\\). Verify each is Borel measurable.',
                    hint: 'For \\(x \\in [0,1)\\), \\(x^n \\to 0\\). For \\(x = 1\\), \\(x^n = 1\\) for all \\(n\\).',
                    solution: 'We have \\(\\sup_n f_n(x) = f_1(x) = x\\) for \\(x \\in [0,1)\\) (since \\(x^n\\) is decreasing) and \\(\\sup_n f_n(1) = 1\\). So \\(\\sup_n f_n(x) = x\\), which is continuous hence measurable. \\(\\inf_n f_n(x) = \\lim_{n \\to \\infty} x^n = 0\\) for \\(x \\in [0,1)\\) and \\(= 1\\) for \\(x = 1\\). So \\(\\inf_n f_n = \\mathbf{1}_{\\{1\\}}\\), measurable. Since the sequence is monotone decreasing on \\([0,1)\\), \\(\\limsup = \\liminf = \\lim = \\mathbf{1}_{\\{1\\}}\\), which is measurable.'
                },
                {
                    question: 'Prove that if \\(f\\) is measurable and \\(f_n \\to f\\) pointwise, the set \\(\\{x : f_n(x) \\to f(x)\\}\\) is measurable. Show this equals \\(X\\) by assumption, but express it using only set operations on \\(\\{|f_n - f| &lt; 1/k\\}\\).',
                    hint: 'Convergence means: for all \\(k \\geq 1\\), there exists \\(N\\) such that \\(|f_n(x) - f(x)| < 1/k\\) for all \\(n \\geq N\\).',
                    solution: '\\(\\{x : f_n(x) \\to f(x)\\} = \\bigcap_{k=1}^{\\infty} \\bigcup_{N=1}^{\\infty} \\bigcap_{n=N}^{\\infty} \\{x : |f_n(x) - f(x)| < 1/k\\}\\). Each inner set \\(\\{|f_n - f| < 1/k\\}\\) is measurable (since \\(f_n - f\\) is measurable, and \\(|\\cdot| < 1/k\\) is a Borel condition). Countable intersections and unions preserve measurability, so the whole set is measurable.'
                },
                {
                    question: 'Let \\(f_n: \\mathbb{R} \\to \\mathbb{R}\\) be the "tent function" \\(f_n(x) = \\max(0, n - n^2|x|)\\). Compute \\(\\limsup f_n\\) and \\(\\liminf f_n\\). Is the limit measurable?',
                    hint: 'For \\(x \\neq 0\\), eventually \\(n^2|x| > n\\), so \\(f_n(x) = 0\\). For \\(x = 0\\), \\(f_n(0) = n \\to \\infty\\).',
                    solution: 'For \\(x = 0\\): \\(f_n(0) = n \\to +\\infty\\). For \\(x \\neq 0\\): when \\(n > 1/|x|\\), we have \\(n^2|x| > n\\), so \\(f_n(x) = 0\\). Thus \\(\\lim f_n(x) = 0\\) for \\(x \\neq 0\\). Both limsup and liminf equal \\(+\\infty \\cdot \\mathbf{1}_{\\{0\\}}\\) (i.e., \\(+\\infty\\) at 0 and 0 elsewhere). This is measurable since \\(\\{\\lim f_n > a\\} = \\{0\\}\\) for \\(a \\geq 0\\) and \\(= \\mathbb{R}\\) for \\(a < 0\\), both Borel.'
                }
            ]
        },
        // ============================================================
        // Section 4: Simple Functions and Approximation
        // ============================================================
        {
            id: 'simple-functions-approximation',
            title: 'Simple Functions and Approximation',
            content: `
                <div class="bridge section-bridge">
                    <p>We now meet the building blocks of Lebesgue integration: <strong>simple functions</strong>. These are the measure-theoretic analogue of step functions in Riemann integration. The central result of this section, the Simple Function Approximation Theorem, says that every non-negative measurable function is the pointwise limit of an increasing sequence of simple functions. This is the foundation on which the Lebesgue integral is constructed in Chapter 6.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define simple functions, state and prove the Simple Function Approximation Theorem, visualize the canonical staircase construction, and understand how the approximation works for general (possibly negative) measurable functions.</p>
                </div>

                <h2>Simple Functions</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.15 (Simple Function)</div>
                    <div class="env-body">
                        <p>A measurable function \\(\\varphi: X \\to \\mathbb{R}\\) is called <strong>simple</strong> if it takes only finitely many values. Every simple function can be written in <strong>standard form</strong>:</p>
                        \\[\\varphi = \\sum_{k=1}^{N} a_k \\, \\mathbf{1}_{A_k}\\]
                        <p>where \\(a_1, \\ldots, a_N\\) are <em>distinct</em> real numbers and \\(A_k = \\varphi^{-1}(\\{a_k\\}) \\in \\mathcal{F}\\) are pairwise disjoint measurable sets with \\(\\bigcup A_k = X\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Staircase Functions)</div>
                    <div class="env-body">
                        <p>A simple function is a "staircase" that partitions the domain into finitely many measurable pieces and assigns a constant height to each piece. Unlike Riemann step functions (which partition the domain into <em>intervals</em>), simple functions can use <em>any measurable sets</em> as their pieces. This extra flexibility is what allows them to approximate arbitrary measurable functions.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.16 (Simple Functions)</div>
                    <div class="env-body">
                        <p>(a) Any indicator function \\(\\mathbf{1}_A\\) (with \\(A \\in \\mathcal{F}\\)) is simple: it takes values 0 and 1.</p>
                        <p>(b) \\(\\varphi(x) = 3 \\cdot \\mathbf{1}_{[0,1]}(x) + 7 \\cdot \\mathbf{1}_{(1,2]}(x) - 2 \\cdot \\mathbf{1}_{(2,3]}(x)\\) is simple on \\([0,3]\\) (with the convention \\(\\varphi = 0\\) outside \\([0,3]\\)).</p>
                        <p>(c) The Dirichlet function \\(\\mathbf{1}_{\\mathbb{Q}}\\) is simple: it takes two values (0 and 1) and \\(\\mathbb{Q}\\) is Borel.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Algebra of Simple Functions)</div>
                    <div class="env-body">
                        <p>Sums, products, scalar multiples, max, and min of simple functions are again simple. The proof is straightforward: if \\(\\varphi\\) takes values \\(a_1, \\ldots, a_N\\) and \\(\\psi\\) takes values \\(b_1, \\ldots, b_M\\), then \\(\\varphi + \\psi\\) takes at most \\(N \\cdot M\\) values (one for each pair \\((a_i, b_j)\\)), which is still finite.</p>
                    </div>
                </div>

                <h2>The Simple Function Approximation Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.17 (Simple Function Approximation)</div>
                    <div class="env-body">
                        <p>Let \\(f: X \\to [0, +\\infty]\\) be measurable. There exists a sequence \\(\\{\\varphi_n\\}\\) of simple functions satisfying:</p>
                        <ol>
                            <li>\\(0 \\leq \\varphi_1 \\leq \\varphi_2 \\leq \\cdots \\leq f\\) &emsp; (increasing)</li>
                            <li>\\(\\varphi_n(x) \\to f(x)\\) for every \\(x \\in X\\) &emsp; (pointwise convergence)</li>
                            <li>If \\(f\\) is bounded, the convergence is uniform.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (The Canonical Construction)</div>
                    <div class="env-body">
                        <p>For each \\(n \\geq 1\\), define \\(\\varphi_n\\) by slicing the range \\([0, n)\\) into \\(n \\cdot 2^n\\) equal sub-intervals of width \\(1/2^n\\):</p>
                        \\[\\varphi_n(x) = \\begin{cases} \\displaystyle\\frac{k}{2^n} &amp; \\text{if } \\frac{k}{2^n} \\leq f(x) &lt; \\frac{k+1}{2^n}, \\quad k = 0, 1, \\ldots, n \\cdot 2^n - 1, \\\\ n &amp; \\text{if } f(x) \\geq n. \\end{cases}\\]
                        <p>In words: \\(\\varphi_n\\) rounds \\(f(x)\\) <em>down</em> to the nearest multiple of \\(1/2^n\\), capping at \\(n\\).</p>
                        <p><strong>Measurability:</strong> Each \\(\\varphi_n\\) takes finitely many values, and \\(\\varphi_n^{-1}(\\{k/2^n\\})\\) is measurable (it is the preimage of an interval under \\(f\\), which is measurable). So \\(\\varphi_n\\) is simple.</p>
                        <p><strong>Increasing:</strong> At step \\(n+1\\), the grid is finer (spacing \\(1/2^{n+1}\\) vs \\(1/2^n\\)) and the cap is higher (\\(n+1\\) vs \\(n\\)), so \\(\\varphi_{n+1} \\geq \\varphi_n\\).</p>
                        <p><strong>Convergence:</strong> If \\(f(x) &lt; \\infty\\), then for large enough \\(n\\), \\(f(x) &lt; n\\), so \\(0 \\leq f(x) - \\varphi_n(x) &lt; 1/2^n \\to 0\\). If \\(f(x) = +\\infty\\), then \\(\\varphi_n(x) = n \\to \\infty\\).</p>
                        <p><strong>Uniform convergence when bounded:</strong> If \\(f \\leq M\\), then for \\(n &gt; M\\), \\(\\sup_x |f(x) - \\varphi_n(x)| \\leq 1/2^n \\to 0\\).</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Rising Staircase)</div>
                    <div class="env-body">
                        <p>Picture the graph of \\(f\\). At step \\(n\\), you lay down a grid of horizontal lines at heights \\(0, 1/2^n, 2/2^n, \\ldots, n\\). The staircase \\(\\varphi_n\\) "snaps" the graph down to the nearest grid line below it. As \\(n\\) increases, the grid gets finer (twice as many lines, half the spacing) and taller (cap rises to \\(n\\)). The staircase rises and hugs the graph ever more tightly. The visualization below animates this process in full detail.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="simple-staircase-viz"></div>

                <h2>Extension to General Measurable Functions</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.18 (Approximation of General Measurable Functions)</div>
                    <div class="env-body">
                        <p>If \\(f: X \\to \\overline{\\mathbb{R}}\\) is measurable, there exists a sequence \\(\\{\\varphi_n\\}\\) of simple functions with \\(\\varphi_n \\to f\\) pointwise and \\(|\\varphi_n| \\leq |f|\\) for all \\(n\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(f = f^+ - f^-\\). Apply Theorem 5.17 to \\(f^+\\) and \\(f^-\\) separately, obtaining increasing simple sequences \\(\\varphi_n^+ \\nearrow f^+\\) and \\(\\varphi_n^- \\nearrow f^-\\). Then \\(\\varphi_n = \\varphi_n^+ - \\varphi_n^-\\) is simple, converges pointwise to \\(f\\), and \\(|\\varphi_n| = \\varphi_n^+ + \\varphi_n^- \\leq f^+ + f^- = |f|\\).</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Simple Functions as the DNA of Integration)</div>
                    <div class="env-body">
                        <p>In Chapter 6, we will define the Lebesgue integral of a non-negative simple function as \\(\\int \\varphi \\, d\\mu = \\sum_{k=1}^N a_k \\, \\mu(A_k)\\), which is the natural "weighted sum." Then the integral of a general non-negative measurable function \\(f\\) will be defined as \\(\\int f \\, d\\mu = \\sup \\{\\int \\varphi \\, d\\mu : 0 \\leq \\varphi \\leq f, \\, \\varphi \\text{ simple}\\}\\). The approximation theorem guarantees this supremum captures the full function.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.1 Theorem 2.10; Royden-Fitzpatrick Proposition 3.22; Stein-Shakarchi III Proposition 4.2.</p>
            `,
            visualizations: [
                {
                    id: 'simple-staircase-viz',
                    title: 'Simple Function Staircase Approximation',
                    description: 'Animate the canonical increasing sequence of simple functions approximating a given non-negative measurable function. Control the refinement level n and watch the staircase converge.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 520;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40', pink: '#f778ba'
                        };

                        var W = canvas.width, H = canvas.height;
                        var margin = { left: 60, right: 160, top: 55, bottom: 65 };
                        var plotW = W - margin.left - margin.right;
                        var plotH = H - margin.top - margin.bottom;

                        // Domain [0, 4], range [0, 3.5]
                        var xMin = 0, xMax = 4, yMin = 0, yMax = 3.5;
                        var nLevel = 2;
                        var funcChoice = 0;
                        var animating = false;
                        var animFrame = null;
                        var animN = 1;
                        var animTime = 0;

                        var targetFunctions = [
                            { name: 'sin + linear', fn: function(x) { return Math.sin(Math.PI * x * 0.7) + 0.4 * x + 0.3; } },
                            { name: 'gaussian bump', fn: function(x) { return 2.8 * Math.exp(-0.5 * (x - 2) * (x - 2)) + 0.2; } },
                            { name: 'x\u00B2/5', fn: function(x) { return x * x / 5; } },
                            { name: 'zigzag', fn: function(x) {
                                var t = x % 1;
                                return (t < 0.5 ? 2 * t : 2 * (1 - t)) * (0.5 + 0.3 * x) + 0.3;
                            }}
                        ];

                        function toSX(x) { return margin.left + (x - xMin) / (xMax - xMin) * plotW; }
                        function toSY(y) { return margin.top + (yMax - y) / (yMax - yMin) * plotH; }

                        VizEngine.createSlider(controls, 'Refinement level n', 1, 8, nLevel, 1, function(v) {
                            nLevel = Math.round(v);
                            stopAnim();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Smooth', function() { funcChoice = 0; stopAnim(); draw(); });
                        VizEngine.createButton(controls, 'Gaussian', function() { funcChoice = 1; stopAnim(); draw(); });
                        VizEngine.createButton(controls, 'Quadratic', function() { funcChoice = 2; stopAnim(); draw(); });
                        VizEngine.createButton(controls, 'Zigzag', function() { funcChoice = 3; stopAnim(); draw(); });

                        var animBtn = VizEngine.createButton(controls, 'Animate n: 1 \u2192 8', function() {
                            if (animating) {
                                stopAnim();
                            } else {
                                animating = true;
                                animN = 1;
                                animTime = 0;
                                animBtn.textContent = 'Stop';
                                runAnim();
                            }
                        });

                        function stopAnim() {
                            animating = false;
                            if (animFrame) cancelAnimationFrame(animFrame);
                            animFrame = null;
                            animBtn.textContent = 'Animate n: 1 \u2192 8';
                        }

                        function runAnim() {
                            if (!animating) return;
                            animTime++;
                            if (animTime % 60 === 0) {
                                animN++;
                                if (animN > 8) { animN = 1; }
                            }
                            nLevel = animN;
                            draw();
                            animFrame = requestAnimationFrame(runAnim);
                        }

                        function computeSimpleFunc(f, x, n) {
                            var val = f(x);
                            var cap = n;
                            if (val >= cap) return cap;
                            var step = 1 / Math.pow(2, n);
                            return Math.floor(val / step) * step;
                        }

                        function draw() {
                            var f = targetFunctions[funcChoice].fn;
                            var n = nLevel;
                            var step = 1 / Math.pow(2, n);
                            var cap = Math.min(n, yMax);
                            var numSteps = Math.round(cap / step);

                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Simple Function Staircase Approximation', W / 2, 18);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('n = ' + n + '  |  grid spacing = 1/2^' + n + ' = ' + step.toFixed(n > 4 ? 5 : 4) + '  |  cap = ' + n + '  |  ' + (numSteps + 1) + ' levels', W / 2, 35);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = Math.ceil(xMin); gx <= xMax; gx++) {
                                var sx = toSX(gx);
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }
                            for (var gy = 0; gy <= yMax; gy += 0.5) {
                                var sy = toSY(gy);
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                            }

                            // Draw horizontal grid lines for the simple function levels (faint)
                            ctx.strokeStyle = 'rgba(63, 185, 160, 0.12)';
                            ctx.lineWidth = 0.5;
                            for (var k = 0; k <= numSteps; k++) {
                                var levelY = k * step;
                                if (levelY > yMax) break;
                                var sy = toSY(levelY);
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left, margin.top + plotH); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var lx = Math.ceil(xMin); lx <= xMax; lx++) {
                                ctx.fillText(lx.toString(), toSX(lx), margin.top + plotH + 16);
                            }
                            ctx.textAlign = 'right';
                            for (var ly = 0; ly <= yMax; ly += 0.5) {
                                ctx.fillText(ly.toFixed(1), margin.left - 8, toSY(ly) + 4);
                            }

                            // Shade the error region between f and phi_n
                            var dx = 0.005;
                            ctx.fillStyle = 'rgba(248, 81, 73, 0.15)';
                            ctx.beginPath();
                            // Trace f forward
                            for (var x = xMin; x <= xMax; x += dx) {
                                var sx = toSX(x);
                                var sy = toSY(Math.min(f(x), yMax));
                                if (x === xMin) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            // Trace phi_n backward
                            for (var x = xMax; x >= xMin; x -= dx) {
                                var sx = toSX(x);
                                var phiVal = computeSimpleFunc(f, x, n);
                                var sy = toSY(Math.min(phiVal, yMax));
                                ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Draw the simple function (staircase) as filled rectangles
                            var xStep = dx;
                            var prevLevel = -1;
                            var segStartX = xMin;

                            for (var x = xMin; x <= xMax + xStep; x += xStep) {
                                var curLevel = computeSimpleFunc(f, Math.min(x, xMax), n);
                                if (curLevel !== prevLevel && prevLevel >= 0) {
                                    // Draw the completed segment
                                    var sx1 = toSX(segStartX);
                                    var sx2 = toSX(Math.min(x, xMax));
                                    var sy = toSY(prevLevel);
                                    var syBase = toSY(0);

                                    // Filled rectangle (faint)
                                    ctx.fillStyle = 'rgba(63, 185, 160, 0.08)';
                                    ctx.fillRect(sx1, sy, sx2 - sx1, syBase - sy);

                                    // Top edge (bright)
                                    ctx.strokeStyle = colors.teal;
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(sx1, sy);
                                    ctx.lineTo(sx2, sy);
                                    ctx.stroke();

                                    segStartX = Math.min(x, xMax);
                                }
                                if (curLevel !== prevLevel) {
                                    // Vertical connector
                                    if (prevLevel >= 0 && x <= xMax) {
                                        ctx.strokeStyle = colors.teal;
                                        ctx.lineWidth = 1;
                                        ctx.setLineDash([3, 3]);
                                        ctx.beginPath();
                                        ctx.moveTo(toSX(Math.min(x, xMax)), toSY(prevLevel));
                                        ctx.lineTo(toSX(Math.min(x, xMax)), toSY(curLevel));
                                        ctx.stroke();
                                        ctx.setLineDash([]);
                                    }
                                    segStartX = Math.min(x, xMax);
                                }
                                prevLevel = curLevel;
                            }

                            // Draw the target function curve
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var x = xMin; x <= xMax; x += dx) {
                                var sx = toSX(x);
                                var sy = toSY(Math.min(f(x), yMax));
                                if (x === xMin) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Cap line
                            if (n <= yMax) {
                                ctx.strokeStyle = colors.yellow;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(margin.left, toSY(n)); ctx.lineTo(margin.left + plotW, toSY(n)); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = colors.yellow;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('cap = ' + n, margin.left + plotW + 4, toSY(n) + 4);
                            }

                            // Compute max error
                            var maxErr = 0;
                            var maxErrX = 0;
                            for (var x = xMin; x <= xMax; x += dx) {
                                var err = Math.abs(f(x) - computeSimpleFunc(f, x, n));
                                if (err > maxErr) { maxErr = err; maxErrX = x; }
                            }

                            // Right-side info panel
                            var panelX = margin.left + plotW + 15;
                            var panelY = margin.top + 20;

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Info Panel', panelX, panelY);

                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('\u2500 f(x): ' + targetFunctions[funcChoice].name, panelX, panelY + 22);
                            ctx.fillStyle = colors.teal;
                            ctx.fillText('\u2500 \u03C6\u2099(x): staircase', panelX, panelY + 40);
                            ctx.fillStyle = 'rgba(248, 81, 73, 0.6)';
                            ctx.fillText('\u2588 error region', panelX, panelY + 58);

                            ctx.fillStyle = colors.muted;
                            ctx.fillText('Grid: 1/2\u207F = ' + step.toFixed(n > 4 ? 5 : 4), panelX, panelY + 84);
                            ctx.fillText('Levels: ' + (numSteps + 1), panelX, panelY + 102);

                            ctx.fillStyle = colors.red;
                            ctx.fillText('Max error: ' + maxErr.toFixed(5), panelX, panelY + 126);
                            ctx.fillStyle = colors.muted;
                            ctx.fillText('Bound: 1/2\u207F = ' + step.toFixed(5), panelX, panelY + 144);

                            ctx.fillStyle = colors.green;
                            ctx.fillText('Error \u2264 1/2\u207F \u2192 0', panelX, panelY + 168);

                            // Error convergence mini-graph
                            var miniX = panelX;
                            var miniY = panelY + 190;
                            var miniW = 130;
                            var miniH = 80;

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.strokeRect(miniX, miniY, miniW, miniH);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '9px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Max error vs n', miniX + miniW / 2, miniY - 4);

                            // Plot 1/2^n for n=1..8
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var k = 1; k <= 8; k++) {
                                var ex = miniX + (k - 1) / 7 * miniW;
                                var ey = miniY + miniH - (1 / Math.pow(2, k)) / 0.5 * miniH;
                                if (k === 1) ctx.moveTo(ex, ey);
                                else ctx.lineTo(ex, ey);
                            }
                            ctx.stroke();

                            // Dots and highlight current
                            for (var k = 1; k <= 8; k++) {
                                var ex = miniX + (k - 1) / 7 * miniW;
                                var ey = miniY + miniH - (1 / Math.pow(2, k)) / 0.5 * miniH;
                                ctx.fillStyle = (k === n) ? colors.green : colors.orange;
                                ctx.beginPath();
                                ctx.arc(ex, ey, (k === n) ? 4 : 2.5, 0, 2 * Math.PI);
                                ctx.fill();
                            }

                            // n labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '8px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var k = 1; k <= 8; k++) {
                                ctx.fillText(k.toString(), miniX + (k - 1) / 7 * miniW, miniY + miniH + 10);
                            }

                            // Bottom label
                            ctx.fillStyle = colors.teal;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03C6\u2099 \u2264 \u03C6\u2099\u208A\u2081 \u2264 f  (increasing), \u03C6\u2099 \u2192 f pointwise', W / 2 - 50, H - 14);
                        }

                        draw();

                        return { stopAnimation: function() { stopAnim(); } };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write the canonical simple function \\(\\varphi_2\\) (\\(n = 2\\)) for \\(f(x) = x\\) on \\([0, 3]\\) in standard form. How many distinct values does it take?',
                    hint: 'With \\(n = 2\\), the grid spacing is \\(1/4\\) and the cap is 2. So \\(\\varphi_2(x)\\) rounds \\(x\\) down to the nearest multiple of \\(1/4\\), capping at 2.',
                    solution: 'On \\([0, 3]\\): \\(\\varphi_2(x) = k/4\\) for \\(x \\in [k/4, (k+1)/4)\\), \\(k = 0, 1, \\ldots, 7\\), and \\(\\varphi_2(x) = 2\\) for \\(x \\geq 2\\). This gives \\(\\varphi_2 = \\sum_{k=0}^{7} \\frac{k}{4} \\mathbf{1}_{[k/4, (k+1)/4)} + 2 \\cdot \\mathbf{1}_{[2, 3]}\\). There are 9 distinct values: \\(0, 1/4, 1/2, 3/4, 1, 5/4, 3/2, 7/4, 2\\).'
                },
                {
                    question: 'Prove that for the canonical construction, \\(\\varphi_{n+1}(x) \\geq \\varphi_n(x)\\) for all \\(x\\). Where does the inequality become strict?',
                    hint: 'Each interval \\([k/2^n, (k+1)/2^n)\\) at level \\(n\\) splits into two intervals \\([2k/2^{n+1}, (2k+1)/2^{n+1})\\) and \\([(2k+1)/2^{n+1}, (2k+2)/2^{n+1})\\) at level \\(n+1\\). The first sub-interval gets the same value; the second gets a larger value.',
                    solution: 'At level \\(n\\), \\(\\varphi_n(x) = k/2^n\\) for \\(x \\in [k/2^n, (k+1)/2^n)\\). At level \\(n+1\\), this interval splits: on the left half \\([2k/2^{n+1}, (2k+1)/2^{n+1})\\), \\(\\varphi_{n+1}(x) = 2k/2^{n+1} = k/2^n = \\varphi_n(x)\\). On the right half \\([(2k+1)/2^{n+1}, (2k+2)/2^{n+1})\\), \\(\\varphi_{n+1}(x) = (2k+1)/2^{n+1} > k/2^n = \\varphi_n(x)\\). So the inequality is strict on the "upper half" of each old interval (roughly half the domain). Also, \\(\\varphi_{n+1}\\) has a higher cap.'
                },
                {
                    question: 'Show that the convergence in Theorem 5.17 is <strong>not</strong> uniform in general (when \\(f\\) is unbounded). Give a specific example.',
                    hint: 'Take \\(f(x) = x\\) on \\([0, \\infty)\\). For any \\(n\\), \\(f(x) - \\varphi_n(x) = n - n = 0\\) for \\(x = n\\), but the error near \\(x = n\\) is close to \\(1/2^n\\)... think about \\(x > n\\).',
                    solution: 'Let \\(f(x) = x\\) on \\([0, \\infty)\\). For \\(x > n\\), \\(\\varphi_n(x) = n\\) (the cap), so \\(f(x) - \\varphi_n(x) = x - n\\). Taking \\(x = 2n\\) gives \\(f(x) - \\varphi_n(x) = n \\to \\infty\\). Hence \\(\\sup_x |f(x) - \\varphi_n(x)| = \\infty\\) for every \\(n\\), and convergence is not uniform.'
                },
                {
                    question: 'Prove that if \\(f \\geq 0\\) is measurable, then \\(f = \\sup\\{\\varphi : 0 \\leq \\varphi \\leq f, \\, \\varphi \\text{ simple}\\}\\). (This identity is used to define the Lebesgue integral.)',
                    hint: 'The canonical sequence \\(\\varphi_n\\) from Theorem 5.17 satisfies \\(\\varphi_n \\leq f\\) and \\(\\varphi_n \\nearrow f\\).',
                    solution: 'Let \\(S = \\sup\\{\\varphi : 0 \\leq \\varphi \\leq f, \\varphi \\text{ simple}\\}\\). Since every \\(\\varphi\\) in the set satisfies \\(\\varphi \\leq f\\), we have \\(S \\leq f\\). For the reverse, the canonical sequence \\(\\{\\varphi_n\\}\\) from Theorem 5.17 satisfies \\(0 \\leq \\varphi_n \\leq f\\), so \\(\\varphi_n \\leq S\\) for all \\(n\\). Taking \\(n \\to \\infty\\): \\(f = \\lim \\varphi_n \\leq S\\). Hence \\(S = f\\).'
                }
            ]
        },
        // ============================================================
        // Section 5: Lusin's Theorem and Almost-Continuous Structure
        // ============================================================
        {
            id: 'lusins-theorem',
            title: "Lusin's Theorem and Almost-Continuous Structure",
            content: `
                <div class="bridge section-bridge">
                    <p>Measurable functions can be wildly discontinuous (the Dirichlet function, for instance, is discontinuous everywhere). Yet Lusin's theorem reveals a hidden structure: every measurable function is "nearly continuous" in a precise sense. Remove a set of arbitrarily small measure, and the restricted function becomes continuous. This result, due to Nikolai Lusin (1912), beautifully connects measurability and continuity.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove Lusin's theorem for real-valued measurable functions on \\(\\mathbb{R}\\). Visualize the process of removing a small exceptional set to make a function continuous. State Egorov's theorem as a companion result linking pointwise and uniform convergence.</p>
                </div>

                <h2>Statement of Lusin's Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.19 (Lusin's Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(f: [a, b] \\to \\mathbb{R}\\) be Lebesgue measurable. For every \\(\\varepsilon &gt; 0\\), there exists a closed set \\(F \\subseteq [a, b]\\) such that:</p>
                        <ol>
                            <li>\\(\\mu([a, b] \\setminus F) &lt; \\varepsilon\\),</li>
                            <li>\\(f|_F\\) (the restriction of \\(f\\) to \\(F\\)) is continuous.</li>
                        </ol>
                        <p>Equivalently, there exists a continuous function \\(g: [a, b] \\to \\mathbb{R}\\) such that \\(\\mu(\\{x : f(x) \\neq g(x)\\}) &lt; \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Chipping Away Discontinuities)</div>
                    <div class="env-body">
                        <p>Think of a measurable function's graph as a "noisy signal" that may have discontinuities scattered throughout \\([a, b]\\). Lusin's theorem says the discontinuities are concentrated on a set of small measure. If you erase (remove) a thin set from the domain, the remaining graph becomes a clean, continuous curve. As \\(\\varepsilon \\to 0\\), you erase less and less, but the remaining piece is always continuous. In the limit, \\(f\\) is "almost everywhere continuous after restriction."</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Lusin Does NOT Say f is Almost Everywhere Continuous)</div>
                    <div class="env-body">
                        <p>Lusin's theorem does <em>not</em> say that \\(f\\) is continuous almost everywhere. The Dirichlet function \\(\\mathbf{1}_{\\mathbb{Q}}\\) is discontinuous <em>everywhere</em> on \\([0,1]\\), yet Lusin's theorem applies: for any \\(\\varepsilon &gt; 0\\), remove a set of measure \\(&lt; \\varepsilon\\) and the restriction is continuous (because \\(\\mathbb{Q}\\) has measure zero, so on a set of measure \\(&gt; 1 - \\varepsilon\\) the function equals \\(\\mathbf{1}_{\\mathbb{Q}^c} = 0\\), which is continuous). The distinction is between "continuous on a large closed subset" and "continuous at most points."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lusin-theorem-viz"></div>

                <h2>Proof of Lusin's Theorem</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch for simple functions, then approximation)</div>
                    <div class="env-body">
                        <p><strong>Step 1 (Simple functions).</strong> If \\(\\varphi = \\sum_{k=1}^{N} a_k \\mathbf{1}_{A_k}\\) is simple, then each \\(A_k\\) is measurable. By regularity of Lebesgue measure, for each \\(k\\) there exists a closed set \\(F_k \\subseteq A_k\\) with \\(\\mu(A_k \\setminus F_k) &lt; \\varepsilon / N\\). On \\(F = \\bigcup F_k\\), the function \\(\\varphi\\) is continuous (it is constant on each \\(F_k\\), and the \\(F_k\\) are pairwise disjoint closed sets), and \\(\\mu([a,b] \\setminus F) &lt; \\varepsilon\\).</p>
                        <p><strong>Step 2 (General measurable functions).</strong> By the Simple Function Approximation Theorem (5.17) and Egorov's theorem (below), approximate \\(f\\) by simple functions \\(\\varphi_n \\to f\\) uniformly on a set of large measure. Apply Step 1 to each \\(\\varphi_n\\). The uniform limit of continuous functions (on a common closed set) is continuous. The details require care with removing small sets at each step, ensuring the total removed measure stays below \\(\\varepsilon\\).</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <h2>Egorov's Theorem: Almost-Uniform Convergence</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.20 (Egorov's Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu(X) &lt; \\infty\\) and let \\(\\{f_n\\}\\) be a sequence of measurable functions converging pointwise to \\(f\\) on \\(X\\). For every \\(\\varepsilon &gt; 0\\), there exists a measurable set \\(E \\subseteq X\\) with \\(\\mu(E) &lt; \\varepsilon\\) such that \\(f_n \\to f\\) <strong>uniformly</strong> on \\(X \\setminus E\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For each \\(k, n \\geq 1\\), define \\(E_{n,k} = \\bigcup_{m=n}^{\\infty} \\{x : |f_m(x) - f(x)| \\geq 1/k\\}\\). Pointwise convergence means that for each \\(x\\) and \\(k\\), \\(x\\) eventually leaves \\(E_{n,k}\\), so \\(E_{n,k} \\downarrow \\emptyset\\) as \\(n \\to \\infty\\) (for fixed \\(k\\)). Since \\(\\mu(X) &lt; \\infty\\), continuity from above gives \\(\\mu(E_{n,k}) \\to 0\\). Choose \\(n_k\\) so that \\(\\mu(E_{n_k, k}) &lt; \\varepsilon / 2^k\\). Let \\(E = \\bigcup_{k=1}^{\\infty} E_{n_k, k}\\); then \\(\\mu(E) &lt; \\varepsilon\\). On \\(X \\setminus E\\): for all \\(k\\), for all \\(m \\geq n_k\\), \\(|f_m(x) - f(x)| &lt; 1/k\\). This is uniform convergence.</p>
                    <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (The Partnership)</div>
                    <div class="env-body">
                        <p>Egorov says: pointwise convergence is "almost" uniform (just remove a small set). Lusin says: measurability is "almost" continuity (just remove a small set). Together, they reveal that measurable functions on finite-measure spaces are much better behaved than they appear. The "pathology" of measurable functions is always confined to sets of arbitrarily small measure.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Finite Measure is Essential for Egorov)</div>
                    <div class="env-body">
                        <p>Egorov's theorem fails without \\(\\mu(X) &lt; \\infty\\). Example: \\(f_n = \\mathbf{1}_{[n, n+1]}\\) on \\(\\mathbb{R}\\). Then \\(f_n \\to 0\\) pointwise, but the convergence is not "almost uniform" because the "traveling bump" always escapes any fixed bounded region.</p>
                    </div>
                </div>

                <h2>Littlewood's Three Principles</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Littlewood's Three Principles)</div>
                    <div class="env-body">
                        <p>J. E. Littlewood summarized the philosophy of Lebesgue's theory in three informal principles:</p>
                        <ol>
                            <li>Every (measurable) set is nearly a finite union of intervals.</li>
                            <li>Every (measurable) function is nearly continuous (Lusin's theorem).</li>
                            <li>Every convergent sequence of (measurable) functions is nearly uniformly convergent (Egorov's theorem).</li>
                        </ol>
                        <p>"Nearly" means "except on a set of arbitrarily small measure." These principles do not replace rigorous proofs, but they provide invaluable intuition: the objects of measure theory are "almost" as well-behaved as the classical objects of analysis. Whenever you encounter a measurable function, think "continuous, up to a negligible error."</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Folland 2.4 (Lusin); Royden-Fitzpatrick 3.5 (Egorov), 3.6 (Lusin); Stein-Shakarchi III Theorem 4.3 (Egorov), Theorem 4.4 (Lusin).</p>
            `,
            visualizations: [
                {
                    id: 'lusin-theorem-viz',
                    title: "Lusin's Theorem Demo",
                    description: "Given a measurable function on [0,1], interactively remove a set of measure < epsilon to make the restriction continuous. Watch the removed set shrink as epsilon decreases.",
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 460;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40', pink: '#f778ba'
                        };

                        var W = canvas.width, H = canvas.height;
                        var margin = { left: 55, right: 30, top: 55, bottom: 55 };
                        var plotW = W - margin.left - margin.right;
                        var plotH = H - margin.top - margin.bottom;

                        var epsilon = 0.3;
                        var funcChoice = 0;

                        // Functions with varying degrees of discontinuity
                        // Function 0: Step function with 5 jumps (measurable, discontinuous at jumps)
                        // Function 1: Oscillating with increasing frequency (measurable)
                        // Function 2: Approximate Dirichlet-like (binary pattern based on digit)

                        function stepFunc(x) {
                            if (x < 0.15) return 0.8;
                            if (x < 0.35) return 0.3;
                            if (x < 0.5) return 0.9;
                            if (x < 0.7) return 0.2;
                            if (x < 0.85) return 0.6;
                            return 0.4;
                        }

                        function oscillatingFunc(x) {
                            return 0.5 + 0.4 * Math.sin(20 * Math.PI * x) * Math.exp(-2 * Math.abs(x - 0.5));
                        }

                        function binaryPatternFunc(x) {
                            // Creates a function with many discontinuities
                            var val = 0;
                            var scale = 0.5;
                            for (var k = 1; k <= 8; k++) {
                                var digit = Math.floor(x * Math.pow(3, k)) % 3;
                                if (digit === 1) val += scale;
                                scale *= 0.5;
                            }
                            return 0.1 + val * 0.8;
                        }

                        var funcs = [
                            { name: 'Step function (5 jumps)', fn: stepFunc },
                            { name: 'Damped oscillation', fn: oscillatingFunc },
                            { name: 'Binary pattern', fn: binaryPatternFunc }
                        ];

                        function toSX(x) { return margin.left + x * plotW; }
                        function toSY(y) { return margin.top + (1 - y) * plotH; }

                        VizEngine.createSlider(controls, '\u03B5 (removed set measure)', 0.01, 0.5, epsilon, 0.01, function(v) {
                            epsilon = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Step', function() { funcChoice = 0; draw(); });
                        VizEngine.createButton(controls, 'Oscillating', function() { funcChoice = 1; draw(); });
                        VizEngine.createButton(controls, 'Binary', function() { funcChoice = 2; draw(); });

                        // Find discontinuity regions for the step function
                        function getDiscontinuityRegions(f, eps) {
                            // Sample the function and find jump locations
                            var dx = 0.001;
                            var jumps = [];
                            var prevVal = f(0);
                            for (var x = dx; x <= 1; x += dx) {
                                var curVal = f(x);
                                if (Math.abs(curVal - prevVal) > 0.05) {
                                    jumps.push(x);
                                }
                                prevVal = curVal;
                            }

                            // Remove duplicates (within 0.01)
                            var uniqueJumps = [];
                            for (var i = 0; i < jumps.length; i++) {
                                if (uniqueJumps.length === 0 || jumps[i] - uniqueJumps[uniqueJumps.length - 1] > 0.01) {
                                    uniqueJumps.push(jumps[i]);
                                }
                            }

                            // Allocate epsilon evenly among discontinuities
                            var nJumps = Math.max(uniqueJumps.length, 1);
                            var halfWidth = Math.min(eps / (2 * nJumps), 0.05);

                            var regions = [];
                            for (var i = 0; i < uniqueJumps.length; i++) {
                                regions.push([
                                    Math.max(0, uniqueJumps[i] - halfWidth),
                                    Math.min(1, uniqueJumps[i] + halfWidth)
                                ]);
                            }

                            return regions;
                        }

                        function draw() {
                            var f = funcs[funcChoice].fn;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Lusin's Theorem: Making f Continuous by Removing a Small Set", W / 2, 18);
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('Function: ' + funcs[funcChoice].name + '  |  \u03B5 = ' + epsilon.toFixed(2), W / 2, 35);

                            // Grid
                            ctx.strokeStyle = colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = 0; gx <= 1; gx += 0.1) {
                                var sx = toSX(gx);
                                ctx.beginPath(); ctx.moveTo(sx, margin.top); ctx.lineTo(sx, margin.top + plotH); ctx.stroke();
                            }
                            for (var gy = 0; gy <= 1; gy += 0.1) {
                                var sy = toSY(gy);
                                ctx.beginPath(); ctx.moveTo(margin.left, sy); ctx.lineTo(margin.left + plotW, sy); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top + plotH); ctx.lineTo(margin.left + plotW, margin.top + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(margin.left, margin.top); ctx.lineTo(margin.left, margin.top + plotH); ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            for (var lx = 0; lx <= 1; lx += 0.2) {
                                ctx.fillText(lx.toFixed(1), toSX(lx), margin.top + plotH + 16);
                            }
                            ctx.textAlign = 'right';
                            for (var ly = 0; ly <= 1; ly += 0.2) {
                                ctx.fillText(ly.toFixed(1), margin.left - 8, toSY(ly) + 4);
                            }

                            // Get removed regions
                            var removedRegions = getDiscontinuityRegions(f, epsilon);

                            // Draw removed regions (red shading)
                            var totalRemoved = 0;
                            for (var i = 0; i < removedRegions.length; i++) {
                                var a = removedRegions[i][0], b = removedRegions[i][1];
                                totalRemoved += (b - a);
                                ctx.fillStyle = 'rgba(248, 81, 73, 0.2)';
                                ctx.fillRect(toSX(a), margin.top, toSX(b) - toSX(a), plotH);

                                // Red border
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.strokeRect(toSX(a), margin.top, toSX(b) - toSX(a), plotH);
                                ctx.setLineDash([]);
                            }

                            // Draw function - different colors for kept/removed
                            var dx = 0.001;
                            // First pass: draw removed parts (faint red)
                            ctx.strokeStyle = 'rgba(248, 81, 73, 0.4)';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var inRemoved = false;
                            var started = false;
                            for (var x = 0; x <= 1; x += dx) {
                                var removed = false;
                                for (var r = 0; r < removedRegions.length; r++) {
                                    if (x >= removedRegions[r][0] && x <= removedRegions[r][1]) {
                                        removed = true; break;
                                    }
                                }
                                if (removed) {
                                    var sx = toSX(x), sy = toSY(f(x));
                                    if (!inRemoved) { ctx.moveTo(sx, sy); inRemoved = true; }
                                    else ctx.lineTo(sx, sy);
                                } else {
                                    if (inRemoved) { ctx.stroke(); ctx.beginPath(); inRemoved = false; }
                                }
                            }
                            if (inRemoved) ctx.stroke();

                            // Second pass: draw kept parts (bright green)
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var inKept = false;
                            for (var x = 0; x <= 1; x += dx) {
                                var removed = false;
                                for (var r = 0; r < removedRegions.length; r++) {
                                    if (x >= removedRegions[r][0] && x <= removedRegions[r][1]) {
                                        removed = true; break;
                                    }
                                }
                                if (!removed) {
                                    var sx = toSX(x), sy = toSY(f(x));
                                    if (!inKept) { ctx.moveTo(sx, sy); inKept = true; }
                                    else ctx.lineTo(sx, sy);
                                } else {
                                    if (inKept) { ctx.stroke(); ctx.beginPath(); inKept = false; }
                                }
                            }
                            if (inKept) ctx.stroke();

                            // Legend and info
                            ctx.fillStyle = colors.green;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('\u2500 f|_F: continuous restriction (F = closed set)', margin.left + 10, H - 34);

                            ctx.fillStyle = colors.red;
                            ctx.fillText('\u2500 removed part: measure < \u03B5 = ' + epsilon.toFixed(2), margin.left + 10, H - 16);

                            ctx.fillStyle = colors.muted;
                            ctx.textAlign = 'right';
                            ctx.fillText('Actual removed measure: ' + totalRemoved.toFixed(4), W - margin.right - 10, H - 16);
                            ctx.fillText(removedRegions.length + ' discontinuity region(s)', W - margin.right - 10, H - 34);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: "Apply Lusin's theorem to \\(f = \\mathbf{1}_{\\mathbb{Q}}\\) on \\([0,1]\\). For \\(\\varepsilon = 0.01\\), describe explicitly a closed set \\(F\\) with \\(\\mu([0,1] \\setminus F) < 0.01\\) on which \\(f|_F\\) is continuous.",
                    hint: 'Since \\(\\mathbb{Q} \\cap [0,1]\\) has measure zero, the function \\(f\\) equals 0 on the irrationals. Cover \\(\\mathbb{Q} \\cap [0,1]\\) by open intervals of total length \\(< 0.01\\), then remove those intervals.',
                    solution: "Enumerate \\(\\mathbb{Q} \\cap [0,1] = \\{q_1, q_2, \\ldots\\}\\). Cover \\(q_n\\) by an open interval \\(I_n\\) of length \\(0.01/2^n\\). Let \\(U = \\bigcup I_n\\); then \\(\\mu(U) < 0.01\\) and \\(\\mathbb{Q} \\cap [0,1] \\subseteq U\\). Let \\(F = [0,1] \\setminus U\\), which is closed. On \\(F\\), \\(f(x) = 0\\) for all \\(x\\) (since all rationals are in \\(U\\)), so \\(f|_F \\equiv 0\\) is continuous. And \\(\\mu([0,1] \\setminus F) = \\mu(U) < 0.01\\)."
                },
                {
                    question: "Prove that Egorov's theorem fails if \\(\\mu(X) = \\infty\\). Use the example \\(f_n = \\mathbf{1}_{[n, n+1]}\\) on \\((\\mathbb{R}, \\mathcal{L}, \\mu)\\).",
                    hint: 'Show that \\(f_n \\to 0\\) pointwise but for any set \\(E\\) with \\(\\mu(E) < \\infty\\), \\(f_n\\) does not converge uniformly on \\(\\mathbb{R} \\setminus E\\).',
                    solution: "\\(f_n(x) = \\mathbf{1}_{[n, n+1]}(x) \\to 0\\) for every \\(x\\) (since for fixed \\(x\\), \\(x \\notin [n, n+1]\\) for all large \\(n\\)). Now let \\(E\\) be any set with \\(\\mu(E) < \\infty\\). We claim \\(f_n\\) does not converge uniformly to 0 on \\(\\mathbb{R} \\setminus E\\). Since \\(\\mu(E \\cap [n, n+1]) \\to 0\\) (by \\(\\mu(E) < \\infty\\)), for large \\(n\\), \\([n, n+1] \\setminus E\\) has positive measure, so there exists \\(x_n \\in [n, n+1] \\setminus E\\) with \\(f_n(x_n) = 1\\). Hence \\(\\sup_{x \\in \\mathbb{R} \\setminus E} |f_n(x)| \\geq 1\\) for all large \\(n\\), and convergence is not uniform."
                },
                {
                    question: "Prove that a measurable function \\(f: [0,1] \\to \\mathbb{R}\\) is the pointwise limit of a sequence of continuous functions. (Hint: combine Lusin with Tietze's extension theorem.)",
                    hint: "For each \\(n\\), use Lusin's theorem with \\(\\varepsilon = 1/n\\) to get a closed set \\(F_n\\) with \\(\\mu(F_n^c) < 1/n\\) and \\(f|_{F_n}\\) continuous. Use Tietze's extension theorem to extend to all of \\([0,1]\\).",
                    solution: "For each \\(n\\), Lusin's theorem gives a closed \\(F_n \\subseteq [0,1]\\) with \\(\\mu([0,1] \\setminus F_n) < 1/n\\) and \\(f|_{F_n}\\) continuous. By Tietze's extension theorem, extend \\(f|_{F_n}\\) to a continuous function \\(g_n: [0,1] \\to \\mathbb{R}\\). Now for each \\(x\\), \\(x \\in F_n\\) for all sufficiently large \\(n\\) (since \\(\\mu(F_n^c) \\to 0\\) means the set of \\(x\\)'s missing infinitely many \\(F_n\\) has measure 0 by Borel-Cantelli). On \\(F_n\\), \\(g_n(x) = f(x)\\), so \\(g_n(x) \\to f(x)\\) for a.e. \\(x\\). With a small modification (take \\(G_n = \\bigcap_{k \\geq n} F_k\\), increasing closed sets), one can arrange pointwise convergence everywhere."
                },
                {
                    question: "State and verify Littlewood's first principle: every Lebesgue measurable set \\(E \\subseteq \\mathbb{R}\\) with \\(\\mu(E) < \\infty\\) is \"nearly\" a finite union of intervals. Specifically, for every \\(\\varepsilon > 0\\), there is a finite union \\(U\\) of open intervals with \\(\\mu(E \\triangle U) < \\varepsilon\\).",
                    hint: 'Use the definition of Lebesgue measure as an infimum over covers by open intervals. Get a countable cover, then truncate to finitely many intervals.',
                    solution: "By definition, \\(\\mu(E) = \\inf\\{\\sum |I_k| : E \\subseteq \\bigcup I_k, I_k \\text{ open intervals}\\}\\). Choose a countable cover \\(\\{I_k\\}\\) with \\(\\sum |I_k| < \\mu(E) + \\varepsilon/2\\). Since the sum converges, there exists \\(N\\) with \\(\\sum_{k>N} |I_k| < \\varepsilon/2\\). Let \\(U = I_1 \\cup \\cdots \\cup I_N\\). Then \\(E \\setminus U \\subseteq \\bigcup_{k>N} I_k\\) has measure \\(< \\varepsilon/2\\), and \\(U \\setminus E \\subseteq (\\bigcup I_k) \\setminus E\\) has measure \\(\\leq \\sum |I_k| - \\mu(E) < \\varepsilon/2\\). So \\(\\mu(E \\triangle U) < \\varepsilon\\)."
                },
                {
                    question: "Show that there is no \"Lusin's theorem for differentiability\": there exists a continuous function \\(f: [0,1] \\to \\mathbb{R}\\) such that for no closed set \\(F\\) of positive measure is \\(f|_F\\) differentiable.",
                    hint: "Consider a nowhere-differentiable continuous function, such as a Weierstrass function.",
                    solution: "The Weierstrass function \\(f(x) = \\sum_{n=0}^{\\infty} a^n \\cos(b^n \\pi x)\\) (with \\(0 < a < 1\\), \\(ab > 1 + 3\\pi/2\\)) is continuous on \\([0,1]\\) but nowhere differentiable. If \\(F \\subseteq [0,1]\\) is any closed set of positive measure and \\(x_0\\) is a point of density of \\(F\\), differentiability of \\(f|_F\\) at \\(x_0\\) would imply the existence of a certain limit along points in \\(F\\). But the nowhere-differentiability of \\(f\\) means no such limit exists. Hence \\(f|_F\\) is not differentiable at any point of density, and so \\(f|_F\\) is not differentiable on a set of full measure in \\(F\\). This contrasts sharply with Lusin's theorem, showing measurability is much better behaved than differentiability."
                },
                {
                    question: 'Let \\(f_n: [0,1] \\to \\mathbb{R}\\) be measurable with \\(f_n \\to f\\) pointwise. Prove that for every \\(\\delta > 0\\), \\(\\lim_{n \\to \\infty} \\mu(\\{x : |f_n(x) - f(x)| > \\delta\\}) = 0\\). (This is called convergence in measure.)',
                    hint: 'Define \\(E_n(\\delta) = \\{x : |f_n(x) - f(x)| > \\delta\\}\\). Show \\(\\limsup E_n(\\delta) = \\emptyset\\) and use the fact that \\(\\mu([0,1]) < \\infty\\).',
                    solution: "Let \\(E_n(\\delta) = \\{|f_n - f| > \\delta\\}\\). Since \\(f_n(x) \\to f(x)\\) for all \\(x\\), every \\(x\\) eventually satisfies \\(|f_n(x) - f(x)| \\leq \\delta\\), meaning \\(x \\notin E_n(\\delta)\\) for large \\(n\\). Hence \\(\\limsup E_n(\\delta) = \\bigcap_{n=1}^{\\infty} \\bigcup_{m=n}^{\\infty} E_m(\\delta) = \\emptyset\\). Since \\(G_n = \\bigcup_{m=n}^{\\infty} E_m(\\delta) \\downarrow \\emptyset\\) and \\(\\mu(G_1) \\leq \\mu([0,1]) = 1 < \\infty\\), continuity from above gives \\(\\mu(G_n) \\to 0\\). Since \\(E_n(\\delta) \\subseteq G_n\\), \\(\\mu(E_n(\\delta)) \\to 0\\)."
                }
            ]
        }
    ]
});
