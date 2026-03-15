window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch16',
    number: 16,
    title: 'The Riesz Representation Theorem and Radon Measures',
    subtitle: 'Measures from Functionals and the Bridge to Topology',
    sections: [
        // ============================================================
        // Section 1: Locally Compact Hausdorff Spaces
        // ============================================================
        {
            id: 'locally-compact-hausdorff',
            title: 'Locally Compact Hausdorff Spaces',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Up to this point, our measure theory has been purely set-theoretic.</strong> We built measures on abstract \\(\\sigma\\)-algebras without any reference to topology. But many of the most important measures in analysis (Lebesgue measure on \\(\\mathbb{R}^n\\), Haar measure on groups, probability measures on metric spaces) live on spaces that carry both a topological and a measure-theoretic structure. The Riesz Representation Theorem provides the canonical bridge: it constructs a measure from a continuous linear functional, tying the topological notion of continuity to the measure-theoretic notion of integration. This chapter develops that bridge.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Review the topological setting for the Riesz theorem: locally compact Hausdorff (LCH) spaces. Introduce the space \\(C_c(X)\\) of compactly supported continuous functions, and recall Urysohn's lemma and partitions of unity, the indispensable tools that let topology talk to measure theory.</p>
                </div>

                <h2>Why Topology Enters Measure Theory</h2>

                <div class="env-block motivation">
                    <div class="env-title">Motivation 16.1 (From Functions to Measures)</div>
                    <div class="env-body">
                        <p>Consider the map \\(f \\mapsto \\int_0^1 f(x)\\,dx\\) on continuous functions \\(f: [0,1] \\to \\mathbb{R}\\). This map is linear, positive (sends nonneg functions to nonneg numbers), and determines Lebesgue measure on \\([0,1]\\). The Riesz theorem says that <em>every</em> positive linear functional on the continuous functions of a locally compact Hausdorff space arises this way: as integration against a unique (suitably regular) Borel measure. The topological hypotheses ensure enough continuous functions exist to separate points and approximate indicators.</p>
                    </div>
                </div>

                <h2>Locally Compact Hausdorff Spaces</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.2 (Hausdorff Space)</div>
                    <div class="env-body">
                        <p>A topological space \\(X\\) is <strong>Hausdorff</strong> (or \\(T_2\\)) if for every pair of distinct points \\(x \\neq y\\), there exist disjoint open sets \\(U \\ni x\\) and \\(V \\ni y\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.3 (Local Compactness)</div>
                    <div class="env-body">
                        <p>A Hausdorff space \\(X\\) is <strong>locally compact</strong> if every point has an open neighborhood whose closure is compact. Equivalently, for every \\(x \\in X\\) and open \\(U \\ni x\\), there exists an open \\(V\\) with \\(x \\in V \\subseteq \\overline{V} \\subseteq U\\) and \\(\\overline{V}\\) compact.</p>
                        <p>We abbreviate "locally compact Hausdorff" as <strong>LCH</strong>.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.4 (Key LCH Spaces)</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\mathbb{R}^n\\) with the Euclidean topology: every point has a closed ball neighborhood.</li>
                            <li>Any compact Hausdorff space (e.g., \\([0,1]\\), the Cantor set, \\(S^n\\)).</li>
                            <li>Any open subset of an LCH space is again LCH.</li>
                            <li>Discrete spaces: every point is clopen, so \\(\\{x\\}\\) is a compact neighborhood.</li>
                        </ul>
                        <p><strong>Non-example:</strong> \\(\\mathbb{Q}\\) with the subspace topology from \\(\\mathbb{R}\\) is Hausdorff but not locally compact. No point has a compact neighborhood (since compact subsets of \\(\\mathbb{Q}\\) have empty interior in \\(\\mathbb{Q}\\)).</p>
                    </div>
                </div>

                <h2>The Space \\(C_c(X)\\)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.5 (Compactly Supported Continuous Functions)</div>
                    <div class="env-body">
                        <p>For an LCH space \\(X\\), define:</p>
                        <ul>
                            <li>\\(C_c(X)\\) = the space of continuous functions \\(f: X \\to \\mathbb{R}\\) with <strong>compact support</strong>, where \\(\\operatorname{supp}(f) = \\overline{\\{x : f(x) \\neq 0\\}}\\) is compact.</li>
                            <li>\\(C_c^+(X) = \\{f \\in C_c(X) : f \\geq 0\\}\\).</li>
                            <li>\\(C_0(X)\\) = the closure of \\(C_c(X)\\) in the sup-norm, i.e., continuous functions that "vanish at infinity." A function \\(f\\) is in \\(C_0(X)\\) if for every \\(\\varepsilon > 0\\), the set \\(\\{|f| \\geq \\varepsilon\\}\\) is compact.</li>
                        </ul>
                        <p>When \\(X\\) is compact, all three spaces coincide with \\(C(X)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why \\(C_c\\) and Not \\(C\\)?)</div>
                    <div class="env-body">
                        <p>On noncompact spaces, \\(C(X)\\) is too large: it contains unbounded functions and functions whose integrals cannot be finite. The space \\(C_c(X)\\) is the natural "test function" space for constructing measures. Every \\(f \\in C_c(X)\\) is bounded (being continuous on a compact set) and vanishes outside a compact set, so any reasonable notion of integration can handle it.</p>
                    </div>
                </div>

                <h2>Urysohn's Lemma and Partitions of Unity</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.6 (Urysohn's Lemma for LCH Spaces)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be LCH. If \\(K \\subseteq U\\) where \\(K\\) is compact and \\(U\\) is open, then there exists \\(f \\in C_c(X)\\) with</p>
                        \\[\\mathbf{1}_K \\leq f \\leq \\mathbf{1}_U.\\]
                        <p>That is, \\(f = 1\\) on \\(K\\), \\(0 \\leq f \\leq 1\\) everywhere, and \\(\\operatorname{supp}(f) \\subseteq U\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Smooth Indicator Approximation)</div>
                    <div class="env-body">
                        <p>Urysohn's lemma says we can always "continuously interpolate" between a compact set (where the function equals 1) and the complement of an open set (where it equals 0). In \\(\\mathbb{R}^n\\), you can achieve this with a smooth bump function; in a general LCH space, continuity is the best you can guarantee. This is the single most important tool in the proof of the Riesz theorem: it lets us approximate indicator functions from above and below by elements of \\(C_c(X)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Notation 16.7</div>
                    <div class="env-body">
                        <p>We write \\(f \\prec U\\) to mean \\(f \\in C_c(X)\\), \\(0 \\leq f \\leq 1\\), and \\(\\operatorname{supp}(f) \\subseteq U\\). If additionally \\(K\\) is compact and \\(f = 1\\) on \\(K\\), we write \\(K \\prec f \\prec U\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.8 (Partition of Unity)</div>
                    <div class="env-body">
                        <p>Let \\(K\\) be a compact subset of an LCH space \\(X\\), and let \\(U_1, \\ldots, U_n\\) be open sets covering \\(K\\). Then there exist functions \\(\\varphi_1, \\ldots, \\varphi_n \\in C_c(X)\\) such that:</p>
                        <ol>
                            <li>\\(0 \\leq \\varphi_i \\leq 1\\) and \\(\\operatorname{supp}(\\varphi_i) \\subseteq U_i\\) for each \\(i\\).</li>
                            <li>\\(\\sum_{i=1}^n \\varphi_i(x) = 1\\) for all \\(x \\in K\\).</li>
                            <li>\\(\\sum_{i=1}^n \\varphi_i(x) \\leq 1\\) for all \\(x \\in X\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch of Theorem 16.8</div>
                    <div class="env-body">
                        <p>By compactness of \\(K\\), extract a finite subcover. For each \\(i\\), use Urysohn's lemma to find \\(h_i \\in C_c(X)\\) with \\(K_i \\prec h_i \\prec U_i\\) where \\(K_i = K \\setminus \\bigcup_{j \\neq i} U_j\\) (suitably refined). Then define \\(\\varphi_1 = h_1\\), \\(\\varphi_2 = h_2(1-h_1)\\), and in general</p>
                        \\[\\varphi_i = h_i \\prod_{j=1}^{i-1}(1-h_j).\\]
                        <p>One verifies that \\(\\sum_{i=1}^n \\varphi_i = 1 - \\prod_{i=1}^n (1-h_i)\\), which equals 1 on \\(K\\) since the \\(h_i\\) cover \\(K\\). Each \\(\\varphi_i\\) has \\(\\operatorname{supp}(\\varphi_i) \\subseteq \\operatorname{supp}(h_i) \\subseteq U_i\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Finite vs. Continuous Partitions of Unity)</div>
                    <div class="env-body">
                        <p>In the Riesz theorem setting we only need <em>finite</em> partitions of unity subordinate to a finite open cover of a compact set. The more sophisticated "continuous partition of unity" for paracompact spaces, while important in differential geometry, is not needed here.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'functional-to-measure-converter',
                    title: 'Functional-to-Measure Converter',
                    description: 'See how a positive linear functional on C_c(X) determines a measure. Choose a functional (integration against density, point evaluation, etc.) and watch as the Riesz construction assigns measures to open sets, then compact sets, then all Borel sets.',
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
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var W = canvas.width, H = canvas.height;
                        var funcType = 0; // 0: Lebesgue, 1: weighted, 2: point mass
                        var animPhase = 0;
                        var playing = false;
                        var animFrame = null;

                        // Controls
                        var funcSelect = document.createElement('select');
                        ['Lebesgue integral: I(f)=∫f dx', 'Weighted: I(f)=∫f·(1+x²)dx', 'Point mass: I(f)=f(0.5)'].forEach(function(txt, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = txt;
                            funcSelect.appendChild(opt);
                        });
                        funcSelect.style.cssText = 'margin:5px; padding:4px; background:#1a1a40; color:#c9d1d9; border:1px solid #333;';
                        funcSelect.addEventListener('change', function() { funcType = parseInt(this.value); animPhase = 0; draw(); });
                        controls.appendChild(funcSelect);

                        var playBtn = document.createElement('button');
                        playBtn.textContent = '▶ Animate Construction';
                        playBtn.style.cssText = 'margin:5px; padding:6px 14px; background:#238636; color:white; border:none; border-radius:4px; cursor:pointer;';
                        playBtn.addEventListener('click', function() {
                            if (playing) { playing = false; playBtn.textContent = '▶ Animate Construction'; if(animFrame) cancelAnimationFrame(animFrame); return; }
                            playing = true; playBtn.textContent = '⏸ Pause'; animPhase = 0;
                            function step() {
                                animPhase = Math.min(animPhase + 0.005, 1);
                                draw();
                                if (animPhase < 1 && playing) animFrame = requestAnimationFrame(step);
                                else { playing = false; playBtn.textContent = '▶ Animate Construction'; }
                            }
                            animFrame = requestAnimationFrame(step);
                        });
                        controls.appendChild(playBtn);

                        function density(x) {
                            if (funcType === 0) return 1;
                            if (funcType === 1) return 1 + x * x;
                            return 0; // point mass
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var mx = 60, my = 40, gw = W - 2*mx, gh = H - 100;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 15px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            var titles = ['Lebesgue Measure from I(f) = ∫f dx', 'Weighted Measure from I(f) = ∫f(1+x²)dx', 'Dirac δ₀.₅ from I(f) = f(0.5)'];
                            ctx.fillText(titles[funcType], W/2, 25);

                            // Draw axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(mx, my); ctx.lineTo(mx, my + gh);
                            ctx.lineTo(mx + gw, my + gh);
                            ctx.stroke();

                            // x-axis labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px monospace';
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 10; i++) {
                                var xv = i / 10;
                                var px = mx + xv * gw;
                                ctx.fillText(xv.toFixed(1), px, my + gh + 18);
                            }

                            // Phase-dependent drawing
                            var phase = animPhase;

                            if (funcType < 2) {
                                // Show density
                                ctx.fillStyle = colors.blue + '40';
                                ctx.strokeStyle = colors.blue;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                var maxD = funcType === 1 ? 2 : 1.2;
                                for (var j = 0; j <= 200; j++) {
                                    var xv2 = j / 200;
                                    var px2 = mx + xv2 * gw;
                                    var py = my + gh - (density(xv2) / maxD) * gh;
                                    if (j === 0) ctx.moveTo(px2, py);
                                    else ctx.lineTo(px2, py);
                                }
                                ctx.stroke();

                                // Fill region based on phase
                                if (phase > 0) {
                                    var a = 0.3, b = Math.min(0.3 + phase * 0.5, 0.8);
                                    ctx.fillStyle = colors.teal + '50';
                                    ctx.beginPath();
                                    ctx.moveTo(mx + a * gw, my + gh);
                                    for (var j2 = 0; j2 <= 100; j2++) {
                                        var xv3 = a + (b - a) * j2 / 100;
                                        var px3 = mx + xv3 * gw;
                                        var py3 = my + gh - (density(xv3) / maxD) * gh;
                                        ctx.lineTo(px3, py3);
                                    }
                                    ctx.lineTo(mx + b * gw, my + gh);
                                    ctx.closePath();
                                    ctx.fill();

                                    // Measure value
                                    var meas = 0;
                                    for (var k = 0; k < 200; k++) {
                                        var xk = a + (b - a) * k / 200;
                                        meas += density(xk) * (b - a) / 200;
                                    }
                                    ctx.fillStyle = colors.teal;
                                    ctx.font = 'bold 14px monospace';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('μ([' + a.toFixed(1) + ', ' + b.toFixed(2) + ']) = ' + meas.toFixed(3), W/2, my + gh + 55);

                                    // Annotation
                                    ctx.fillStyle = colors.yellow;
                                    ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                                    ctx.fillText('μ(U) = sup{ I(f) : f ≺ U }', W/2, my + gh + 75);
                                }
                            } else {
                                // Point mass at 0.5
                                var px5 = mx + 0.5 * gw;
                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(px5, my + gh);
                                var arrowH = phase * gh * 0.7;
                                ctx.lineTo(px5, my + gh - arrowH);
                                ctx.stroke();

                                // Arrow head
                                if (phase > 0.1) {
                                    ctx.fillStyle = colors.red;
                                    ctx.beginPath();
                                    ctx.moveTo(px5, my + gh - arrowH - 8);
                                    ctx.lineTo(px5 - 6, my + gh - arrowH + 4);
                                    ctx.lineTo(px5 + 6, my + gh - arrowH + 4);
                                    ctx.closePath();
                                    ctx.fill();
                                }

                                ctx.fillStyle = colors.red;
                                ctx.font = 'bold 14px monospace';
                                ctx.textAlign = 'center';
                                ctx.fillText('δ₀.₅ : mass 1 at x = 0.5', W/2, my + gh + 55);
                                ctx.fillStyle = colors.yellow;
                                ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                                ctx.fillText('I(f) = f(0.5) gives a point mass', W/2, my + gh + 75);
                            }

                            // Labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x', mx + gw / 2, my + gh + 35);
                            ctx.save();
                            ctx.translate(15, my + gh / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText(funcType < 2 ? 'density dμ/dx' : 'measure', 0, 0);
                            ctx.restore();
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 2: Positive Linear Functionals
        // ============================================================
        {
            id: 'positive-linear-functionals',
            title: 'Positive Linear Functionals',
            content: `
                <div class="bridge section-bridge">
                    <p>With \\(C_c(X)\\) in hand, we now study the linear functionals on it that correspond to measures. The key property is <em>positivity</em>: a functional that sends nonnegative functions to nonnegative numbers. This single algebraic constraint, combined with the topological structure of \\(C_c(X)\\), already forces a remarkable amount of regularity.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define positive linear functionals on \\(C_c(X)\\). Give the main examples (integration against a measure, point evaluation, weighted sums). Prove that positivity implies a natural continuity estimate, and that the functional is determined by its values on compactly supported functions.</p>
                </div>

                <h2>Definition and First Properties</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.9 (Positive Linear Functional)</div>
                    <div class="env-body">
                        <p>A <strong>positive linear functional</strong> on \\(C_c(X)\\) is a map \\(I: C_c(X) \\to \\mathbb{R}\\) satisfying:</p>
                        <ol>
                            <li><strong>Linearity:</strong> \\(I(\\alpha f + \\beta g) = \\alpha I(f) + \\beta I(g)\\) for all \\(f, g \\in C_c(X)\\) and \\(\\alpha, \\beta \\in \\mathbb{R}\\).</li>
                            <li><strong>Positivity:</strong> \\(f \\geq 0 \\implies I(f) \\geq 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 16.10 (Positivity Implies Monotonicity and Boundedness)</div>
                    <div class="env-body">
                        <p>Let \\(I\\) be a positive linear functional on \\(C_c(X)\\). Then:</p>
                        <ol>
                            <li><strong>Monotonicity:</strong> If \\(f \\leq g\\) in \\(C_c(X)\\), then \\(I(f) \\leq I(g)\\).</li>
                            <li><strong>Local boundedness:</strong> For every compact \\(K \\subseteq X\\), there exists \\(C_K \\geq 0\\) such that \\(|I(f)| \\leq C_K \\|f\\|_\\infty\\) for all \\(f \\in C_c(X)\\) with \\(\\operatorname{supp}(f) \\subseteq K\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Proposition 16.10</div>
                    <div class="env-body">
                        <p>(1) If \\(f \\leq g\\), then \\(g - f \\geq 0\\), so \\(I(g - f) \\geq 0\\), giving \\(I(g) \\geq I(f)\\) by linearity.</p>
                        <p>(2) By Urysohn's lemma, pick \\(\\varphi \\in C_c(X)\\) with \\(\\varphi = 1\\) on \\(K\\) and \\(0 \\leq \\varphi \\leq 1\\). For any \\(f\\) with \\(\\operatorname{supp}(f) \\subseteq K\\), we have \\(|f| \\leq \\|f\\|_\\infty \\varphi\\), so \\(-\\|f\\|_\\infty \\varphi \\leq f \\leq \\|f\\|_\\infty \\varphi\\). By monotonicity, \\(-\\|f\\|_\\infty I(\\varphi) \\leq I(f) \\leq \\|f\\|_\\infty I(\\varphi)\\). Take \\(C_K = I(\\varphi)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Positivity Is a Strong Constraint)</div>
                    <div class="env-body">
                        <p>In finite dimensions, a positive linear functional on \\(\\mathbb{R}^n\\) is simply \\(x \\mapsto \\sum c_i x_i\\) with \\(c_i \\geq 0\\). Positivity forces the "coefficients" (which in our setting become the measure) to be nonneg. Moreover, positivity automatically yields a form of continuity (local boundedness), which in finite dimensions is trivial but in infinite dimensions is a genuine gift: we did not need to assume any continuity.</p>
                    </div>
                </div>

                <h2>Key Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 16.11 (Integration Against a Measure)</div>
                    <div class="env-body">
                        <p>If \\(\\mu\\) is a Borel measure on \\(X\\) that is finite on compact sets, then</p>
                        \\[I_\\mu(f) = \\int_X f\\,d\\mu\\]
                        <p>defines a positive linear functional on \\(C_c(X)\\). Positivity follows from monotonicity of the integral. This is the prototypical example, and the Riesz theorem says <em>every</em> positive linear functional has this form.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.12 (Point Evaluation)</div>
                    <div class="env-body">
                        <p>Fix \\(x_0 \\in X\\). The evaluation functional \\(\\delta_{x_0}(f) = f(x_0)\\) is a positive linear functional. The associated measure is the Dirac mass \\(\\delta_{x_0}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.13 (Weighted Sum of Point Evaluations)</div>
                    <div class="env-body">
                        <p>Let \\(x_1, x_2, \\ldots \\in X\\) and \\(c_1, c_2, \\ldots \\geq 0\\). If \\(\\sum c_i < \\infty\\), then</p>
                        \\[I(f) = \\sum_{i=1}^\\infty c_i f(x_i)\\]
                        <p>is a positive linear functional. The series converges because \\(f\\) has compact support and hence only finitely many \\(x_i\\) lie in \\(\\operatorname{supp}(f)\\) (if the \\(x_i\\) have no accumulation point in \\(\\operatorname{supp}(f)\\)). The associated measure is \\(\\mu = \\sum c_i \\delta_{x_i}\\), a purely atomic measure.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.14 (Integration Against a Density)</div>
                    <div class="env-body">
                        <p>On \\(\\mathbb{R}\\), let \\(w: \\mathbb{R} \\to [0, \\infty)\\) be a locally integrable function. Then</p>
                        \\[I(f) = \\int_{\\mathbb{R}} f(x) w(x)\\,dx\\]
                        <p>is a positive linear functional, and the associated measure is \\(d\\mu = w\\,dx\\). This is the mechanism by which probability distributions with densities (Gaussian, exponential, etc.) enter the Riesz framework.</p>
                    </div>
                </div>

                <h2>From Functionals to Pre-measures</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark 16.15 (The Riesz Strategy Preview)</div>
                    <div class="env-body">
                        <p>Given a positive linear functional \\(I\\), the Riesz construction will define a measure \\(\\mu\\) in two steps:</p>
                        <ol>
                            <li><strong>For open sets:</strong> \\(\\mu(U) = \\sup\\{I(f) : f \\prec U\\}\\). This is the "outer" approximation.</li>
                            <li><strong>For all sets:</strong> \\(\\mu(E) = \\inf\\{\\mu(U) : U \\supseteq E, \\, U \\text{ open}\\}\\). This is outer regularity.</li>
                        </ol>
                        <p>The positivity of \\(I\\) ensures \\(\\mu(U) \\geq 0\\). The linearity, combined with Urysohn and partitions of unity, ensures countable additivity. The full proof is the content of the next section.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Not Every Linear Functional Is Positive)</div>
                    <div class="env-body">
                        <p>The functional \\(I(f) = f'(0)\\) (the derivative at 0) is linear on \\(C_c^1(\\mathbb{R})\\) but not positive: the function \\(f(x) = e^{-x^2}(1 - 2x^2)\\) is nonneg near 0 but has \\(f'(0) = 0\\), while other nonneg functions can have negative derivatives. A functional that is not positive cannot arise from a (positive) measure. The signed version of the Riesz theorem (Section 5) handles signed measures and general bounded linear functionals.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: []
        },

        // ============================================================
        // Section 3: The Riesz Representation Theorem
        // ============================================================
        {
            id: 'riesz-representation-theorem',
            title: 'The Riesz Representation Theorem',
            content: `
                <div class="bridge section-bridge">
                    <p>We now arrive at the central result of this chapter. The Riesz Representation Theorem asserts that positive linear functionals on \\(C_c(X)\\) are in bijective correspondence with Radon measures on \\(X\\). The theorem simultaneously constructs the measure, proves it is unique, and establishes its regularity properties. It is one of the deepest results connecting topology and measure theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State the full Riesz Representation Theorem. Outline the main steps of the proof. Explain the roles of outer regularity, inner regularity, and \\(\\sigma\\)-finiteness conditions.</p>
                </div>

                <h2>Statement of the Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.16 (Riesz Representation Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a locally compact Hausdorff space and let \\(I: C_c(X) \\to \\mathbb{R}\\) be a positive linear functional. Then there exists a unique Borel measure \\(\\mu\\) on \\(X\\) such that:</p>
                        <ol>
                            <li>\\(I(f) = \\int_X f\\,d\\mu\\) for all \\(f \\in C_c(X)\\).</li>
                            <li>\\(\\mu(K) < \\infty\\) for every compact \\(K \\subseteq X\\).</li>
                            <li><strong>Outer regularity:</strong> \\(\\mu(E) = \\inf\\{\\mu(U) : U \\supseteq E, \\, U \\text{ open}\\}\\) for every Borel set \\(E\\).</li>
                            <li><strong>Inner regularity on open sets:</strong> \\(\\mu(U) = \\sup\\{\\mu(K) : K \\subseteq U, \\, K \\text{ compact}\\}\\) for every open \\(U\\).</li>
                        </ol>
                        <p>Moreover, \\(\\mu\\) is inner regular on all Borel sets that have finite measure or are \\(\\sigma\\)-finite.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 16.17 (Regularity Terminology)</div>
                    <div class="env-body">
                        <p>A Borel measure satisfying conditions (2)-(4) is called a <strong>Radon measure</strong> by many authors (though conventions vary; see Section 4). The regularity conditions are not merely technical: they are what make the measure computable. Outer regularity says you can approximate any set from outside by open sets; inner regularity says you can approximate from inside by compact sets. Together, they pin down the measure uniquely.</p>
                    </div>
                </div>

                <h2>Proof Outline</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof Outline of Theorem 16.16</div>
                    <div class="env-body">
                        <p>The proof proceeds in four stages.</p>

                        <p><strong>Stage 1: Define \\(\\mu\\) on open sets.</strong> For an open set \\(U \\subseteq X\\), define</p>
                        \\[\\mu(U) = \\sup\\{I(f) : f \\prec U\\},\\]
                        <p>where \\(f \\prec U\\) means \\(f \\in C_c(X)\\), \\(0 \\leq f \\leq 1\\), and \\(\\operatorname{supp}(f) \\subseteq U\\). This is well-defined (the sup exists in \\([0, \\infty]\\)) and monotone: \\(U \\subseteq V \\implies \\mu(U) \\leq \\mu(V)\\).</p>

                        <p><strong>Stage 2: Extend to all sets via outer regularity.</strong> For any \\(E \\subseteq X\\), define</p>
                        \\[\\mu^*(E) = \\inf\\{\\mu(U) : U \\supseteq E, \\, U \\text{ open}\\}.\\]
                        <p>One shows that \\(\\mu^*\\) is an outer measure, and that every open set (hence every Borel set) is \\(\\mu^*\\)-measurable in the Carathéodory sense. On Borel sets, set \\(\\mu = \\mu^*\\).</p>

                        <p><strong>Stage 3: Verify inner regularity on open sets.</strong> The key step uses partitions of unity. Given an open \\(U\\) and \\(f \\prec U\\), cover \\(\\operatorname{supp}(f)\\) by finitely many open sets inside \\(U\\), apply a partition of unity, and show that the value \\(I(f)\\) can be approximated by \\(\\mu(K)\\) for compact \\(K \\subseteq U\\). This establishes</p>
                        \\[\\mu(U) = \\sup\\{\\mu(K) : K \\subseteq U, \\, K \\text{ compact}\\}.\\]

                        <p><strong>Stage 4: Prove \\(I(f) = \\int f\\,d\\mu\\) and uniqueness.</strong> For \\(f \\in C_c^+(X)\\), approximate \\(f\\) from below by simple functions using the "layer cake" decomposition: for \\(\\varepsilon > 0\\), partition the range \\([0, \\|f\\|_\\infty]\\) into intervals of width \\(\\varepsilon\\) and use the level sets \\(\\{f > t\\}\\) (which are open). Urysohn functions between consecutive level sets give</p>
                        \\[\\left|I(f) - \\int f\\,d\\mu\\right| \\leq \\varepsilon \\cdot \\mu(\\operatorname{supp}(f)).\\]
                        <p>Letting \\(\\varepsilon \\to 0\\) gives \\(I(f) = \\int f\\,d\\mu\\). Uniqueness follows because \\(\\mu\\) on open sets is determined by \\(I\\), and the regularity conditions extend this to all Borel sets.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Significance and Perspective</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why the Theorem Matters)</div>
                    <div class="env-body">
                        <p>The Riesz theorem says that "integration" and "measure" contain exactly the same information: given one, you can uniquely recover the other. This is remarkable because they seem like different objects. A measure is a set function; a functional is defined on functions. The theorem says these two viewpoints are equivalent, and the translation between them is canonical.</p>
                        <p>This duality has far-reaching consequences: it allows probabilists to define measures via expectations, lets analysts construct measures by specifying integrals, and gives topologists a way to measure sets using only continuous functions.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.18 (Recovering Lebesgue Measure)</div>
                    <div class="env-body">
                        <p>The Riemann integral defines a positive linear functional on \\(C_c(\\mathbb{R}^n)\\) via \\(I(f) = \\int_{\\mathbb{R}^n} f\\,dx\\) (the Riemann integral exists for continuous, compactly supported functions). The Riesz theorem yields a Radon measure \\(\\mu\\) with \\(\\int f\\,d\\mu = I(f)\\). One verifies (using the translation and scaling properties of the Riemann integral) that \\(\\mu\\) is translation-invariant and assigns the unit cube measure 1. By the uniqueness of Lebesgue measure (Chapter 4), \\(\\mu\\) must be Lebesgue measure. This gives an alternative, topology-driven construction of Lebesgue measure.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.19 (Haar Measure Sketch)</div>
                    <div class="env-body">
                        <p>On a locally compact group \\(G\\), the Riesz theorem is the standard tool for constructing Haar measure. One constructs a left-invariant positive linear functional on \\(C_c(G)\\) (using a covering argument), then applies the Riesz theorem to obtain the left-invariant Radon measure. The uniqueness clause guarantees uniqueness up to a scalar, which is the celebrated uniqueness of Haar measure.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 16.20 (Uniqueness of Radon Measures)</div>
                    <div class="env-body">
                        <p>If \\(\\mu\\) and \\(\\nu\\) are Radon measures on an LCH space \\(X\\) and \\(\\int f\\,d\\mu = \\int f\\,d\\nu\\) for all \\(f \\in C_c(X)\\), then \\(\\mu = \\nu\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Corollary 16.20</div>
                    <div class="env-body">
                        <p>Both \\(\\mu\\) and \\(\\nu\\) represent the same positive linear functional \\(I(f) = \\int f\\,d\\mu = \\int f\\,d\\nu\\). By the uniqueness clause of the Riesz theorem, \\(\\mu = \\nu\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Regularity Matters for Uniqueness)</div>
                    <div class="env-body">
                        <p>Without regularity hypotheses, uniqueness can fail. There exist distinct Borel measures on \\(\\mathbb{R}\\) that agree on all continuous functions but differ on some Borel sets. The Riesz theorem avoids this by producing the unique <em>regular</em> Borel measure. Always check regularity when invoking uniqueness.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'radon-measure-regularity',
                    title: 'Radon Measure Regularity',
                    description: 'Visualize outer and inner regularity. Pick a Borel set E on [0,1]; watch open sets shrink toward E from outside and compact sets grow toward E from inside, with the measure converging from both sides.',
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

                        var W = canvas.width, H = canvas.height;
                        var epsilon = 0.15;
                        var setType = 0; // 0: interval, 1: Cantor-like, 2: fat Cantor
                        var animPhase = 0;
                        var playing = false;
                        var animFrame = null;

                        var setSelect = document.createElement('select');
                        ['Interval [0.3, 0.7]', 'Two intervals [0.1,0.3]∪[0.6,0.9]', 'Fat Cantor (μ=0.5)'].forEach(function(txt, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = txt;
                            setSelect.appendChild(opt);
                        });
                        setSelect.style.cssText = 'margin:5px; padding:4px; background:#1a1a40; color:#c9d1d9; border:1px solid #333;';
                        setSelect.addEventListener('change', function() { setType = parseInt(this.value); animPhase = 0; draw(); });
                        controls.appendChild(setSelect);

                        var slider = document.createElement('input');
                        slider.type = 'range'; slider.min = 0; slider.max = 100; slider.value = 30;
                        slider.style.cssText = 'margin:5px; width:150px; vertical-align:middle;';
                        var sliderLabel = document.createElement('span');
                        sliderLabel.textContent = ' ε = 0.150';
                        sliderLabel.style.cssText = 'color:#c9d1d9; font:12px monospace;';
                        slider.addEventListener('input', function() {
                            epsilon = parseInt(this.value) / 200;
                            sliderLabel.textContent = ' ε = ' + epsilon.toFixed(3);
                            draw();
                        });
                        controls.appendChild(slider);
                        controls.appendChild(sliderLabel);

                        function getIntervals() {
                            if (setType === 0) return [[0.3, 0.7]];
                            if (setType === 1) return [[0.1, 0.3], [0.6, 0.9]];
                            // Fat Cantor: approximate
                            return [[0.0, 0.125], [0.1875, 0.3125], [0.375, 0.5], [0.5625, 0.6875], [0.75, 0.875], [0.9375, 1.0]];
                        }

                        function totalMeasure(intervals) {
                            var s = 0;
                            for (var i = 0; i < intervals.length; i++) s += intervals[i][1] - intervals[i][0];
                            return s;
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var mx = 50, gw = W - 2*mx;
                            var barY = 100, barH = 40;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 15px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Inner and Outer Regularity', W/2, 30);

                            // Number line
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(mx, barY + barH + 20);
                            ctx.lineTo(mx + gw, barY + barH + 20);
                            ctx.stroke();

                            for (var i = 0; i <= 10; i++) {
                                var px = mx + (i/10) * gw;
                                ctx.beginPath();
                                ctx.moveTo(px, barY + barH + 15);
                                ctx.lineTo(px, barY + barH + 25);
                                ctx.stroke();
                                ctx.fillStyle = colors.muted;
                                ctx.font = '11px monospace';
                                ctx.textAlign = 'center';
                                ctx.fillText((i/10).toFixed(1), px, barY + barH + 38);
                            }

                            var intervals = getIntervals();
                            var eps = epsilon;

                            // Outer: open neighborhoods (blue, behind)
                            ctx.fillStyle = colors.blue + '30';
                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            for (var j = 0; j < intervals.length; j++) {
                                var a = Math.max(0, intervals[j][0] - eps);
                                var b = Math.min(1, intervals[j][1] + eps);
                                var px1 = mx + a * gw;
                                var pw = (b - a) * gw;
                                ctx.fillRect(px1, barY - 15, pw, barH + 30);
                                ctx.strokeRect(px1, barY - 15, pw, barH + 30);
                            }

                            // Inner: compact subsets (green, in front)
                            ctx.fillStyle = colors.green + '40';
                            ctx.strokeStyle = colors.green;
                            ctx.lineWidth = 2;
                            for (var j2 = 0; j2 < intervals.length; j2++) {
                                var a2 = intervals[j2][0] + eps * 0.5;
                                var b2 = intervals[j2][1] - eps * 0.5;
                                if (b2 > a2) {
                                    var px2 = mx + a2 * gw;
                                    var pw2 = (b2 - a2) * gw;
                                    ctx.fillRect(px2, barY + 5, pw2, barH - 10);
                                    ctx.strokeRect(px2, barY + 5, pw2, barH - 10);
                                }
                            }

                            // The set E (orange)
                            ctx.fillStyle = colors.orange + '90';
                            ctx.strokeStyle = colors.orange;
                            ctx.lineWidth = 2;
                            for (var j3 = 0; j3 < intervals.length; j3++) {
                                var px3 = mx + intervals[j3][0] * gw;
                                var pw3 = (intervals[j3][1] - intervals[j3][0]) * gw;
                                ctx.fillRect(px3, barY, pw3, barH);
                                ctx.strokeRect(px3, barY, pw3, barH);
                            }

                            // Legend
                            var ly = barY + barH + 60;
                            ctx.font = '13px "Computer Modern Serif", Georgia, serif';

                            ctx.fillStyle = colors.blue;
                            ctx.fillRect(mx, ly, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('Open superset U ⊇ E (outer approx)', mx + 20, ly + 12);

                            ctx.fillStyle = colors.orange;
                            ctx.fillRect(mx, ly + 22, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Borel set E', mx + 20, ly + 34);

                            ctx.fillStyle = colors.green;
                            ctx.fillRect(mx, ly + 44, 14, 14);
                            ctx.fillStyle = colors.text;
                            ctx.fillText('Compact subset K ⊆ E (inner approx)', mx + 20, ly + 56);

                            // Measures
                            var muE = totalMeasure(intervals);
                            var outerIntervals = intervals.map(function(iv) { return [Math.max(0, iv[0]-eps), Math.min(1, iv[1]+eps)]; });
                            var innerIntervals = intervals.map(function(iv) { return [iv[0]+eps*0.5, iv[1]-eps*0.5]; }).filter(function(iv) { return iv[1] > iv[0]; });
                            var muOuter = totalMeasure(outerIntervals);
                            var muInner = totalMeasure(innerIntervals);

                            ctx.font = 'bold 14px monospace';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = colors.green;
                            ctx.fillText('μ(K) = ' + muInner.toFixed(3), W/2 - 150, ly + 85);
                            ctx.fillStyle = colors.orange;
                            ctx.fillText('μ(E) = ' + muE.toFixed(3), W/2, ly + 85);
                            ctx.fillStyle = colors.blue;
                            ctx.fillText('μ(U) = ' + muOuter.toFixed(3), W/2 + 150, ly + 85);

                            ctx.fillStyle = colors.yellow;
                            ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                            ctx.fillText('μ(K) ≤ μ(E) ≤ μ(U),  both converge to μ(E) as ε → 0', W/2, ly + 108);
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 4: Radon Measures
        // ============================================================
        {
            id: 'radon-measures',
            title: 'Radon Measures',
            content: `
                <div class="bridge section-bridge">
                    <p>The Riesz theorem produces a Borel measure with strong regularity properties. Measures of this kind deserve a name and systematic study. Radon measures are the "well-behaved" Borel measures on LCH spaces: they are finite on compact sets and enjoy both inner and outer regularity. This section develops their basic theory and contrasts them with merely Borel measures.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define Radon measures precisely. Prove that they form a large and natural class. Discuss the differences between Borel, Borel regular, and Radon measures. Introduce weak convergence of Radon measures.</p>
                </div>

                <h2>Definition and Basic Properties</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.21 (Radon Measure)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be an LCH space. A <strong>Radon measure</strong> on \\(X\\) is a Borel measure \\(\\mu\\) satisfying:</p>
                        <ol>
                            <li><strong>Locally finite:</strong> \\(\\mu(K) < \\infty\\) for every compact \\(K \\subseteq X\\).</li>
                            <li><strong>Outer regular:</strong> \\(\\mu(E) = \\inf\\{\\mu(U) : U \\supseteq E, \\, U \\text{ open}\\}\\) for every Borel set \\(E\\).</li>
                            <li><strong>Inner regular:</strong> \\(\\mu(U) = \\sup\\{\\mu(K) : K \\subseteq U, \\, K \\text{ compact}\\}\\) for every open set \\(U\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 16.22 (Terminological Warning)</div>
                    <div class="env-body">
                        <p>The definition of "Radon measure" varies across textbooks. Some authors require inner regularity on <em>all</em> Borel sets; others require it only on open sets and sets of finite measure. The definition above (following Folland and Rudin) requires inner regularity on open sets; the Riesz theorem guarantees that inner regularity extends to all \\(\\sigma\\)-finite Borel sets automatically. On \\(\\sigma\\)-compact spaces (which include \\(\\mathbb{R}^n\\) and all second-countable LCH spaces), all conventions agree.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 16.23 (Properties of Radon Measures)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) be a Radon measure on an LCH space \\(X\\).</p>
                        <ol>
                            <li>If \\(E\\) is a Borel set with \\(\\mu(E) < \\infty\\), then \\(\\mu(E) = \\sup\\{\\mu(K) : K \\subseteq E, \\, K \\text{ compact}\\}\\).</li>
                            <li>If \\(X\\) is \\(\\sigma\\)-compact, then \\(\\mu\\) is inner regular on <em>all</em> Borel sets.</li>
                            <li>The support of \\(\\mu\\), defined as \\(\\operatorname{supp}(\\mu) = X \\setminus \\bigcup\\{U \\text{ open} : \\mu(U) = 0\\}\\), is a closed set, and \\(\\mu(X \\setminus \\operatorname{supp}(\\mu)) = 0\\) if \\(\\mu\\) is inner regular on all Borel sets.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch of (1)</div>
                    <div class="env-body">
                        <p>Given \\(\\varepsilon > 0\\), use outer regularity to find open \\(U \\supseteq E\\) with \\(\\mu(U) < \\mu(E) + \\varepsilon\\). Then use inner regularity on \\(U\\) to find compact \\(K' \\subseteq U\\) with \\(\\mu(K') > \\mu(U) - \\varepsilon\\). Now \\(K' \\not\\subseteq E\\) in general, but \\(\\mu(K' \\setminus E) \\leq \\mu(U \\setminus E) = \\mu(U) - \\mu(E) < \\varepsilon\\). Since \\(K' \\setminus E\\) is open relative to \\(K'\\), one can find a compact subset \\(K \\subseteq K' \\cap E\\) with \\(\\mu(K) > \\mu(E) - 2\\varepsilon\\). (The precise argument uses Urysohn and the regularity of the restricted measure.)</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Borel vs. Radon: What Can Go Wrong</h2>

                <div class="env-block example">
                    <div class="env-title">Example 16.24 (A Borel Measure That Is Not Radon)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be an uncountable set with the discrete topology. Then \\(X\\) is LCH (every singleton is open and compact). Counting measure \\(\\mu(E) = |E|\\) (cardinality, with \\(|E| = \\infty\\) if \\(E\\) is infinite) is a Borel measure that is locally finite (\\(\\mu(\\{x\\}) = 1\\)). It is inner regular (every set is a union of singletons, which are compact). However, it fails outer regularity if \\(X\\) is given additional structure; in the discrete case it happens to satisfy all Radon properties. For a genuine failure, consider the Borel measure on the long line that assigns infinite measure to any uncountable set.</p>
                        <p>A simpler failure: on \\(\\mathbb{R}\\) with the usual topology, define \\(\\mu(E) = \\#(E \\cap \\mathbb{Z})\\) (counting measure on the integers). This is a Radon measure: it is locally finite, outer regular, and inner regular. But the measure \\(\\nu\\) that assigns \\(\\nu(E) = \\infty\\) for every nonempty open set and \\(\\nu(\\emptyset) = 0\\) is a Borel measure that is decidedly not Radon.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.25 (When Borel = Radon)</div>
                    <div class="env-body">
                        <p>On a second-countable LCH space (equivalently, a Polish locally compact space), every locally finite Borel measure is automatically Radon. In particular, on \\(\\mathbb{R}^n\\), the notions of "locally finite Borel measure" and "Radon measure" coincide.</p>
                    </div>
                </div>

                <h2>Weak Convergence of Radon Measures</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.26 (Weak Convergence / Vague Convergence)</div>
                    <div class="env-body">
                        <p>A sequence of Radon measures \\((\\mu_n)\\) on an LCH space \\(X\\) converges <strong>vaguely</strong> (or weakly-*) to a Radon measure \\(\\mu\\) if</p>
                        \\[\\int_X f\\,d\\mu_n \\to \\int_X f\\,d\\mu \\quad \\text{for all } f \\in C_c(X).\\]
                        <p>We write \\(\\mu_n \\xrightarrow{v} \\mu\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 16.27 (Vague vs. Weak)</div>
                    <div class="env-body">
                        <p>In probability, "weak convergence" typically means testing against \\(C_b(X)\\) (bounded continuous functions), not just \\(C_c(X)\\). For finite measures on a Polish space, the two notions coincide (Portmanteau theorem). For general Radon measures, "vague convergence" (testing against \\(C_c\\)) is the natural topology from the Riesz theorem, but it can lose mass at infinity: \\(\\delta_n \\xrightarrow{v} 0\\) on \\(\\mathbb{R}\\), even though each \\(\\delta_n\\) has total mass 1. To prevent mass escape, one adds the condition \\(\\mu_n(X) \\to \\mu(X)\\), yielding "tight" or "narrow" convergence.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.28 (Approximation to the Identity)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi_n(x) = n \\varphi(nx)\\) where \\(\\varphi \\in C_c(\\mathbb{R})\\), \\(\\varphi \\geq 0\\), \\(\\int \\varphi = 1\\). Then the measures \\(d\\mu_n = \\varphi_n\\,dx\\) converge vaguely to \\(\\delta_0\\). Indeed, for \\(f \\in C_c(\\mathbb{R})\\):</p>
                        \\[\\int f \\varphi_n\\,dx = \\int f(y/n) \\varphi(y)\\,dy \\to f(0) \\int \\varphi = f(0) = \\int f\\,d\\delta_0.\\]
                        <p>This is the standard approximation-to-the-identity argument, now interpreted as vague convergence of Radon measures.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'weak-convergence-animator',
                    title: 'Weak/Vague Convergence Animator',
                    description: 'Watch sequences of measures converge vaguely. Choose from: Gaussians narrowing to a delta, uniform measures spreading out, or point masses escaping to infinity (demonstrating mass loss).',
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

                        var W = canvas.width, H = canvas.height;
                        var seqType = 0;
                        var n = 1;
                        var playing = false;
                        var animFrame = null;
                        var lastTime = 0;

                        var seqSelect = document.createElement('select');
                        ['Gaussians → δ₀', 'Uniforms spreading (mass loss)', 'Point masses → ∞ (mass escape)'].forEach(function(txt, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = txt;
                            seqSelect.appendChild(opt);
                        });
                        seqSelect.style.cssText = 'margin:5px; padding:4px; background:#1a1a40; color:#c9d1d9; border:1px solid #333;';
                        seqSelect.addEventListener('change', function() { seqType = parseInt(this.value); n = 1; draw(); });
                        controls.appendChild(seqSelect);

                        var playBtn = document.createElement('button');
                        playBtn.textContent = '▶ Play';
                        playBtn.style.cssText = 'margin:5px; padding:6px 14px; background:#238636; color:white; border:none; border-radius:4px; cursor:pointer;';
                        playBtn.addEventListener('click', function() {
                            if (playing) { playing = false; playBtn.textContent = '▶ Play'; if(animFrame) cancelAnimationFrame(animFrame); return; }
                            playing = true; playBtn.textContent = '⏸ Pause'; n = 1; lastTime = 0;
                            function step(ts) {
                                if (!lastTime) lastTime = ts;
                                if (ts - lastTime > 400) {
                                    lastTime = ts;
                                    n = Math.min(n + 1, 30);
                                    draw();
                                }
                                if (n < 30 && playing) animFrame = requestAnimationFrame(step);
                                else { playing = false; playBtn.textContent = '▶ Play'; }
                            }
                            animFrame = requestAnimationFrame(step);
                        });
                        controls.appendChild(playBtn);

                        var resetBtn = document.createElement('button');
                        resetBtn.textContent = '↺ Reset';
                        resetBtn.style.cssText = 'margin:5px; padding:6px 14px; background:#30363d; color:#c9d1d9; border:1px solid #555; border-radius:4px; cursor:pointer;';
                        resetBtn.addEventListener('click', function() {
                            playing = false; playBtn.textContent = '▶ Play';
                            if(animFrame) cancelAnimationFrame(animFrame);
                            n = 1; draw();
                        });
                        controls.appendChild(resetBtn);

                        function gaussDensity(x, sigma) {
                            return Math.exp(-x*x/(2*sigma*sigma)) / (sigma * Math.sqrt(2*Math.PI));
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var mx = 60, my = 40, gw = W - 2*mx, gh = H - 110;
                            var xMin = -4, xMax = 4;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 15px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            var titles = ['Gaussian N(0,1/n) → δ₀', 'Uniform on [-n,n]: mass stays 1 but density → 0', 'δₙ: point mass escaping to +∞'];
                            ctx.fillText(titles[seqType] + '   (n = ' + n + ')', W/2, 25);

                            // Axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(mx, my + gh);
                            ctx.lineTo(mx + gw, my + gh);
                            ctx.stroke();

                            // x-axis
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px monospace';
                            ctx.textAlign = 'center';
                            for (var i = xMin; i <= xMax; i++) {
                                var px = mx + (i - xMin)/(xMax - xMin) * gw;
                                ctx.fillText(i.toString(), px, my + gh + 16);
                            }

                            // Draw density
                            var maxY = 3;
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;

                            if (seqType === 0) {
                                // Gaussian with sigma = 1/sqrt(n)
                                var sigma = 1 / Math.sqrt(n);
                                for (var j = 0; j <= 400; j++) {
                                    var xv = xMin + (xMax - xMin) * j/400;
                                    var yv = gaussDensity(xv, sigma);
                                    var px2 = mx + j/400 * gw;
                                    var py = my + gh - (yv / maxY) * gh;
                                    py = Math.max(my, py);
                                    if (!started) { ctx.moveTo(px2, py); started = true; }
                                    else ctx.lineTo(px2, py);
                                }
                                ctx.stroke();

                                // Annotation
                                ctx.fillStyle = colors.yellow;
                                ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                                ctx.fillText('σ = 1/√' + n + ' ≈ ' + sigma.toFixed(3) + ',  total mass = 1', W/2, my + gh + 50);

                            } else if (seqType === 1) {
                                // Uniform on [-n, n]
                                var halfW = Math.min(n, xMax);
                                var density = 1/(2*n);
                                var pxL = mx + (-halfW - xMin)/(xMax - xMin) * gw;
                                var pxR = mx + (halfW - xMin)/(xMax - xMin) * gw;
                                var pyD = my + gh - (density / maxY) * gh;
                                pyD = Math.max(my, pyD);

                                ctx.beginPath();
                                ctx.moveTo(pxL, my + gh);
                                ctx.lineTo(pxL, pyD);
                                ctx.lineTo(pxR, pyD);
                                ctx.lineTo(pxR, my + gh);
                                ctx.stroke();

                                ctx.fillStyle = colors.teal + '30';
                                ctx.fillRect(pxL, pyD, pxR - pxL, my + gh - pyD);

                                ctx.fillStyle = colors.yellow;
                                ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                                ctx.fillText('density = 1/' + (2*n) + ' ≈ ' + density.toFixed(4) + ',  total mass = 1,  but density → 0', W/2, my + gh + 50);

                            } else {
                                // Point mass at n
                                var pxN = mx + (n - xMin)/(xMax - xMin) * gw;
                                if (pxN >= mx && pxN <= mx + gw) {
                                    ctx.strokeStyle = colors.red;
                                    ctx.lineWidth = 3;
                                    ctx.beginPath();
                                    ctx.moveTo(pxN, my + gh);
                                    ctx.lineTo(pxN, my + 20);
                                    ctx.stroke();
                                    ctx.fillStyle = colors.red;
                                    ctx.beginPath();
                                    ctx.moveTo(pxN, my + 12);
                                    ctx.lineTo(pxN - 6, my + 24);
                                    ctx.lineTo(pxN + 6, my + 24);
                                    ctx.closePath();
                                    ctx.fill();
                                }

                                ctx.fillStyle = colors.yellow;
                                ctx.font = '13px "Computer Modern Serif", Georgia, serif';
                                if (n <= xMax) {
                                    ctx.fillText('δ_' + n + ': mass 1 at x=' + n, W/2, my + gh + 50);
                                } else {
                                    ctx.fillText('δ_' + n + ': mass escaped beyond view!  ∫f dμₙ → 0 for all f ∈ Cc', W/2, my + gh + 50);
                                }
                            }

                            // Bottom annotation
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Vague convergence: test against compactly supported continuous functions', W/2, my + gh + 75);
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 5: Applications and the Dual of C_0(X)
        // ============================================================
        {
            id: 'dual-of-c0-applications',
            title: 'Applications and the Dual of C₀(X)',
            content: `
                <div class="bridge section-bridge">
                    <p>The positive Riesz theorem (Theorem 16.16) constructs a positive measure from a positive linear functional. But many functionals of interest are not positive: the signed difference of two probability measures, or a general bounded linear functional on \\(C_0(X)\\). The Riesz-Markov-Kakutani theorem extends the correspondence to <em>signed</em> and <em>complex</em> Radon measures, identifying the dual space of \\(C_0(X)\\) with the space of finite signed Radon measures. This section presents that extension and key applications.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State the Riesz-Markov-Kakutani theorem for signed measures. Identify \\(C_0(X)^*\\) with the space \\(M(X)\\) of finite signed Radon measures. Discuss the weak-* topology on \\(M(X)\\) and applications to probability, approximation theory, and functional analysis.</p>
                </div>

                <h2>Signed Radon Measures and the Full Duality</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.29 (Signed and Complex Radon Measures)</div>
                    <div class="env-body">
                        <p>A <strong>finite signed Radon measure</strong> on an LCH space \\(X\\) is a signed Borel measure \\(\\mu = \\mu^+ - \\mu^-\\) (Jordan decomposition) where \\(\\mu^+\\) and \\(\\mu^-\\) are both finite Radon measures. The total variation is \\(|\\mu| = \\mu^+ + \\mu^-\\), which is a finite (positive) Radon measure.</p>
                        <p>We write \\(M(X)\\) for the space of all finite signed Radon measures on \\(X\\), equipped with the total variation norm \\(\\|\\mu\\| = |\\mu|(X)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.30 (Riesz-Markov-Kakutani: Dual of \\(C_0(X)\\))</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be an LCH space. The map \\(\\mu \\mapsto I_\\mu\\), where</p>
                        \\[I_\\mu(f) = \\int_X f\\,d\\mu, \\quad f \\in C_0(X),\\]
                        <p>is an isometric isomorphism from \\(M(X)\\) (with the total variation norm) onto \\(C_0(X)^*\\) (with the operator norm). That is:</p>
                        <ol>
                            <li>Every bounded linear functional on \\(C_0(X)\\) has the form \\(f \\mapsto \\int f\\,d\\mu\\) for a unique \\(\\mu \\in M(X)\\).</li>
                            <li>\\(\\|I_\\mu\\|_{C_0(X)^*} = |\\mu|(X) = \\|\\mu\\|_{TV}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch of Theorem 16.30</div>
                    <div class="env-body">
                        <p>Given a bounded linear functional \\(\\Lambda\\) on \\(C_0(X)\\), write \\(\\Lambda = \\Lambda^+ - \\Lambda^-\\) where \\(\\Lambda^+(f) = \\sup\\{\\Lambda(g) : 0 \\leq g \\leq f\\}\\) for \\(f \\geq 0\\). Then \\(\\Lambda^+\\) and \\(\\Lambda^-\\) are positive linear functionals on \\(C_c(X)\\) (extended to \\(C_0(X)\\) by continuity). Apply the positive Riesz theorem to each, obtaining Radon measures \\(\\mu^+\\) and \\(\\mu^-\\). Set \\(\\mu = \\mu^+ - \\mu^-\\). Boundedness of \\(\\Lambda\\) ensures \\(\\mu^+(X), \\mu^-(X) < \\infty\\). The isometry \\(\\|\\Lambda\\| = |\\mu|(X)\\) follows from the decomposition.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Dual Pairing)</div>
                    <div class="env-body">
                        <p>The duality \\(C_0(X)^* \\cong M(X)\\) says that finite signed measures are exactly the "generalized numbers" that arise when you integrate continuous functions. Just as \\((\\mathbb{R}^n)^* \\cong \\mathbb{R}^n\\) via the dot product, the dual of the function space \\(C_0(X)\\) is the measure space \\(M(X)\\) via the integration pairing \\(\\langle f, \\mu \\rangle = \\int f\\,d\\mu\\). This is the infinite-dimensional analogue of the dot product.</p>
                    </div>
                </div>

                <h2>The Weak-* Topology on \\(M(X)\\)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.31 (Weak-* Topology on Measures)</div>
                    <div class="env-body">
                        <p>The <strong>weak-* topology</strong> on \\(M(X)\\) is the coarsest topology making each map \\(\\mu \\mapsto \\int f\\,d\\mu\\) continuous for \\(f \\in C_0(X)\\). A net \\((\\mu_\\alpha)\\) converges weak-* to \\(\\mu\\) if and only if \\(\\int f\\,d\\mu_\\alpha \\to \\int f\\,d\\mu\\) for every \\(f \\in C_0(X)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.32 (Banach-Alaoglu for Measures)</div>
                    <div class="env-body">
                        <p>The closed unit ball \\(\\{\\mu \\in M(X) : \\|\\mu\\|_{TV} \\leq 1\\}\\) is weak-* compact. In particular, every sequence of probability measures on a \\(\\sigma\\)-compact metrizable LCH space has a weak-* convergent subsequence (Prokhorov-style sequential compactness).</p>
                    </div>
                </div>

                <h2>Applications</h2>

                <div class="env-block example">
                    <div class="env-title">Example 16.33 (Existence of Minimizers in Calculus of Variations)</div>
                    <div class="env-body">
                        <p>Many optimization problems in probability and statistics take the form: minimize \\(F(\\mu) = \\int \\phi\\,d\\mu\\) subject to moment constraints \\(\\int g_i\\,d\\mu = c_i\\). The Riesz duality and Banach-Alaoglu theorem guarantee that the feasible set (when nonempty) is weak-* closed and bounded, hence compact. This ensures existence of minimizers. The Riesz theorem converts the abstract optimization over measures into a concrete problem about integrals.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.34 (Probability Measures and Expectations)</div>
                    <div class="env-body">
                        <p>A probability measure \\(P\\) on \\(\\mathbb{R}^n\\) is a Radon measure with \\(P(\\mathbb{R}^n) = 1\\). The expectation \\(E[f] = \\int f\\,dP\\) is a positive linear functional with \\(E[1] = 1\\). The Riesz theorem shows that this is the <em>only</em> way to define a consistent notion of expectation: any positive linear functional \\(I\\) on \\(C_c(\\mathbb{R}^n)\\) with \\(I(f) \\leq \\|f\\|_\\infty\\) for \\(f\\) supported in large balls is integration against a sub-probability measure.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.35 (Stone-Weierstrass via Measures)</div>
                    <div class="env-body">
                        <p>Here is a proof strategy for the Stone-Weierstrass theorem using Riesz duality. Let \\(\\mathcal{A} \\subseteq C(K)\\) be a subalgebra separating points and containing constants. To show \\(\\overline{\\mathcal{A}} = C(K)\\), by Hahn-Banach it suffices to show: if \\(\\mu \\in M(K)\\) and \\(\\int f\\,d\\mu = 0\\) for all \\(f \\in \\mathcal{A}\\), then \\(\\mu = 0\\). Since \\(\\mathcal{A}\\) is an algebra, \\(\\int f^n\\,d\\mu = 0\\) for all \\(n\\), and the moments determine the measure. The Riesz theorem provides the bridge between the functional-analytic argument and the measure-theoretic conclusion.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.36 (Portmanteau Theorem, Selected Equivalences)</div>
                    <div class="env-body">
                        <p>For probability measures \\(\\mu_n, \\mu\\) on a metrizable LCH space \\(X\\), the following are equivalent:</p>
                        <ol>
                            <li>\\(\\int f\\,d\\mu_n \\to \\int f\\,d\\mu\\) for all bounded continuous \\(f\\).</li>
                            <li>\\(\\limsup \\mu_n(F) \\leq \\mu(F)\\) for all closed \\(F\\).</li>
                            <li>\\(\\liminf \\mu_n(U) \\geq \\mu(U)\\) for all open \\(U\\).</li>
                            <li>\\(\\mu_n(A) \\to \\mu(A)\\) for every Borel set \\(A\\) with \\(\\mu(\\partial A) = 0\\).</li>
                        </ol>
                        <p>This is the fundamental characterization of weak convergence in probability theory, and the Riesz framework makes it natural: conditions (2)-(4) are regularity statements about how the measures interact with the topology.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 16.37 (Looking Ahead)</div>
                    <div class="env-body">
                        <p>The Riesz representation theorem is a prototype for a family of representation theorems in functional analysis: every bounded linear functional on a "nice" function space is integration against something. The Radon-Nikodym theorem (Chapter 11) identifies \\(L^p\\)-functionals with \\(L^q\\)-functions; the Riesz-Fréchet theorem identifies Hilbert space functionals with inner products. The common theme is duality: the dual of a function space is a measure space, and the pairing is always integration.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'dual-pairing-viz',
                    title: 'Dual Pairing: C₀(X)* ≅ M(X)',
                    description: 'Choose a signed measure μ and a test function f. Watch the integration pairing ⟨f, μ⟩ = ∫f dμ computed visually, showing how positive and negative parts of the measure contribute.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var colors = {
                            bg: '#0c0c20', blue: '#58a6ff', teal: '#3fb9a0',
                            orange: '#f0883e', green: '#3fb950', red: '#f85149',
                            text: '#c9d1d9', muted: '#8b949e', purple: '#bc8cff',
                            yellow: '#d29922', grid: '#1a1a40'
                        };

                        var W = canvas.width, H = canvas.height;
                        var measureType = 0;
                        var funcType = 0;

                        var measSelect = document.createElement('select');
                        ['μ = δ₀ − δ₁ (signed)', 'μ = Gaussian density', 'μ = Lebesgue on [0,1]'].forEach(function(txt, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = txt;
                            measSelect.appendChild(opt);
                        });
                        measSelect.style.cssText = 'margin:5px; padding:4px; background:#1a1a40; color:#c9d1d9; border:1px solid #333;';
                        measSelect.addEventListener('change', function() { measureType = parseInt(this.value); draw(); });
                        controls.appendChild(measSelect);

                        var funcSelect = document.createElement('select');
                        ['f(x) = x', 'f(x) = x²', 'f(x) = cos(πx)', 'f(x) = e^{-x²}'].forEach(function(txt, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = txt;
                            funcSelect.appendChild(opt);
                        });
                        funcSelect.style.cssText = 'margin:5px; padding:4px; background:#1a1a40; color:#c9d1d9; border:1px solid #333;';
                        funcSelect.addEventListener('change', function() { funcType = parseInt(this.value); draw(); });
                        controls.appendChild(funcSelect);

                        function testFunc(x) {
                            if (funcType === 0) return x;
                            if (funcType === 1) return x * x;
                            if (funcType === 2) return Math.cos(Math.PI * x);
                            return Math.exp(-x * x);
                        }

                        function funcLabel() {
                            return ['f(x) = x', 'f(x) = x²', 'f(x) = cos(πx)', 'f(x) = e^{-x²}'][funcType];
                        }

                        function computeIntegral() {
                            if (measureType === 0) {
                                // delta_0 - delta_1
                                return testFunc(0) - testFunc(1);
                            }
                            // Numerical integration
                            var sum = 0;
                            var N = 1000;
                            var a, b;
                            if (measureType === 1) { a = -4; b = 4; }
                            else { a = 0; b = 1; }
                            var dx = (b - a) / N;
                            for (var i = 0; i < N; i++) {
                                var x = a + (i + 0.5) * dx;
                                var w;
                                if (measureType === 1) w = Math.exp(-x*x/2) / Math.sqrt(2*Math.PI);
                                else w = 1;
                                sum += testFunc(x) * w * dx;
                            }
                            return sum;
                        }

                        function draw() {
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var mx = 60, my = 50, gw = W - 2*mx, gh = 130;

                            // Title
                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 15px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Dual Pairing: ⟨f, μ⟩ = ∫f dμ', W/2, 25);

                            var xMin, xMax;
                            if (measureType === 1) { xMin = -3; xMax = 3; }
                            else { xMin = -0.5; xMax = 1.5; }

                            function toPixX(x) { return mx + (x - xMin)/(xMax - xMin) * gw; }

                            // Draw test function (top panel)
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Test function ' + funcLabel(), mx, my - 5);

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(mx, my + gh);
                            ctx.lineTo(mx + gw, my + gh);
                            ctx.stroke();

                            // Zero line for function
                            var zeroY = my + gh * 0.5;
                            ctx.strokeStyle = colors.grid;
                            ctx.beginPath();
                            ctx.moveTo(mx, zeroY);
                            ctx.lineTo(mx + gw, zeroY);
                            ctx.stroke();

                            ctx.strokeStyle = colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var fMax = 1.5;
                            for (var j = 0; j <= 300; j++) {
                                var xv = xMin + (xMax - xMin) * j/300;
                                var fv = testFunc(xv);
                                var pxF = mx + j/300 * gw;
                                var pyF = zeroY - (fv / fMax) * (gh * 0.45);
                                if (j === 0) ctx.moveTo(pxF, pyF);
                                else ctx.lineTo(pxF, pyF);
                            }
                            ctx.stroke();

                            // Draw measure (bottom panel)
                            var my2 = my + gh + 40;
                            var gh2 = 100;
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px "Computer Modern Serif", Georgia, serif';
                            ctx.textAlign = 'left';
                            var measLabels = ['μ = δ₀ − δ₁', 'μ = N(0,1)', 'μ = Leb|[0,1]'];
                            ctx.fillText('Measure: ' + measLabels[measureType], mx, my2 - 5);

                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(mx, my2 + gh2);
                            ctx.lineTo(mx + gw, my2 + gh2);
                            ctx.stroke();

                            if (measureType === 0) {
                                // delta_0 - delta_1
                                var px0 = toPixX(0);
                                var px1 = toPixX(1);
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(px0, my2 + gh2); ctx.lineTo(px0, my2 + 10); ctx.stroke();
                                ctx.fillStyle = colors.green;
                                ctx.beginPath(); ctx.arc(px0, my2 + 10, 5, 0, 2*Math.PI); ctx.fill();

                                ctx.strokeStyle = colors.red;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(px1, my2 + gh2); ctx.lineTo(px1, my2 + gh2 - 40); ctx.stroke();
                                ctx.fillStyle = colors.red;
                                ctx.beginPath(); ctx.arc(px1, my2 + gh2 - 40, 5, 0, 2*Math.PI); ctx.fill();

                                ctx.fillStyle = colors.green;
                                ctx.font = '11px monospace';
                                ctx.textAlign = 'center';
                                ctx.fillText('+1', px0, my2 + gh2 + 14);
                                ctx.fillStyle = colors.red;
                                ctx.fillText('-1', px1, my2 + gh2 + 14);

                            } else if (measureType === 1) {
                                ctx.strokeStyle = colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                var dMax = 0.5;
                                for (var k = 0; k <= 300; k++) {
                                    var xk = xMin + (xMax - xMin)*k/300;
                                    var dk = Math.exp(-xk*xk/2)/Math.sqrt(2*Math.PI);
                                    var pxk = mx + k/300*gw;
                                    var pyk = my2 + gh2 - (dk/dMax)*gh2*0.85;
                                    if (k === 0) ctx.moveTo(pxk, pyk);
                                    else ctx.lineTo(pxk, pyk);
                                }
                                ctx.stroke();
                            } else {
                                ctx.fillStyle = colors.teal + '50';
                                var pxA = toPixX(0);
                                var pxB = toPixX(1);
                                ctx.fillRect(pxA, my2 + 10, pxB - pxA, gh2 - 10);
                                ctx.strokeStyle = colors.teal;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(pxA, my2 + 10, pxB - pxA, gh2 - 10);
                            }

                            // Result
                            var integral = computeIntegral();
                            ctx.fillStyle = colors.yellow;
                            ctx.font = 'bold 16px monospace';
                            ctx.textAlign = 'center';
                            ctx.fillText('⟨f, μ⟩ = ∫f dμ = ' + integral.toFixed(4), W/2, my2 + gh2 + 50);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                // ============================================================
                // 16 Exercises (6 computational, 7 proof, 3 exploration)
                // ============================================================

                // --- COMPUTATIONAL (6 exercises) ---
                {
                    question: '<strong>[Computational, 1 star]</strong> Let \\(I(f) = 2f(0) + 3f(1)\\) for \\(f \\in C_c(\\mathbb{R})\\). What is the Radon measure \\(\\mu\\) given by the Riesz theorem? Compute \\(\\mu([0,1])\\), \\(\\mu(\\{0\\})\\), and \\(\\mu((0,1))\\).',
                    hint: 'The functional is a sum of point evaluations, so the measure is a sum of Dirac masses.',
                    solution: '\\(\\mu = 2\\delta_0 + 3\\delta_1\\). Then \\(\\mu([0,1]) = 2 + 3 = 5\\), \\(\\mu(\\{0\\}) = 2\\), and \\(\\mu((0,1)) = 0\\) (no mass at either endpoint).'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> On \\([0,1]\\), define \\(I(f) = \\int_0^1 f(x) \\cdot 2x\\,dx\\). Verify that \\(I\\) is a positive linear functional and find the associated Radon measure. Compute \\(\\mu([0, 1/2])\\).',
                    hint: 'The density is \\(w(x) = 2x\\). Integrate over \\([0, 1/2]\\).',
                    solution: 'Positivity: if \\(f \\geq 0\\) and \\(2x \\geq 0\\) on \\([0,1]\\), then \\(I(f) = \\int f \\cdot 2x\\,dx \\geq 0\\). The Radon measure is \\(d\\mu = 2x\\,dx\\). Then \\(\\mu([0,1/2]) = \\int_0^{1/2} 2x\\,dx = [x^2]_0^{1/2} = 1/4\\).'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> Let \\(\\mu_n\\) be the uniform measure on \\(\\{0, 1/n, 2/n, \\ldots, 1\\}\\), i.e., \\(\\mu_n = \\frac{1}{n+1} \\sum_{k=0}^n \\delta_{k/n}\\). Show that \\(\\mu_n \\xrightarrow{v} \\mu\\) where \\(\\mu\\) is Lebesgue measure on \\([0,1]\\). Compute \\(\\int x^2\\,d\\mu_n\\) and verify convergence to \\(\\int_0^1 x^2\\,dx\\).',
                    hint: 'The integral \\(\\int x^2\\,d\\mu_n\\) is a Riemann sum. Use the formula \\(\\sum_{k=0}^n k^2 = n(n+1)(2n+1)/6\\).',
                    solution: '\\(\\int x^2\\,d\\mu_n = \\frac{1}{n+1}\\sum_{k=0}^n (k/n)^2 = \\frac{1}{n^2(n+1)}\\sum_{k=0}^n k^2 = \\frac{1}{n^2(n+1)} \\cdot \\frac{n(n+1)(2n+1)}{6} = \\frac{2n+1}{6n} \\to \\frac{1}{3}\\). This equals \\(\\int_0^1 x^2\\,dx = 1/3\\). For general \\(f \\in C([0,1])\\), \\(\\int f\\,d\\mu_n\\) is a Riemann sum converging to \\(\\int_0^1 f\\,dx\\), so \\(\\mu_n \\xrightarrow{v} \\text{Leb}\\).'
                },
                {
                    question: '<strong>[Computational, 2 stars]</strong> Let \\(\\mu\\) be the Radon measure on \\(\\mathbb{R}\\) with \\(d\\mu = e^{-|x|}\\,dx\\). Compute \\(\\mu(\\mathbb{R})\\), \\(\\mu([0,\\infty))\\), and verify that \\(\\mu\\) is a finite Radon measure.',
                    hint: 'Use \\(\\int_0^\\infty e^{-x}\\,dx = 1\\) and symmetry.',
                    solution: '\\(\\mu(\\mathbb{R}) = \\int_{-\\infty}^\\infty e^{-|x|}\\,dx = 2\\int_0^\\infty e^{-x}\\,dx = 2\\). \\(\\mu([0,\\infty)) = \\int_0^\\infty e^{-x}\\,dx = 1\\). For Radon: locally finite since \\(e^{-|x|}\\) is bounded on compact sets; outer and inner regular because \\(\\mu \\ll \\text{Leb}\\) and Lebesgue measure is Radon on \\(\\mathbb{R}\\).'
                },
                {
                    question: '<strong>[Computational, 3 stars]</strong> Define a signed measure \\(\\mu = \\delta_0 - \\frac{1}{2}\\delta_1 + \\frac{1}{2}\\delta_{-1}\\). Compute \\(|\\mu|(\\mathbb{R})\\), \\(\\mu^+(\\mathbb{R})\\), \\(\\mu^-(\\mathbb{R})\\), and \\(\\int \\cos(\\pi x)\\,d\\mu\\).',
                    hint: 'Identify the positive and negative parts of \\(\\mu\\). Use \\(\\cos(0) = 1\\), \\(\\cos(\\pi) = -1\\), \\(\\cos(-\\pi) = -1\\).',
                    solution: '\\(\\mu^+ = \\delta_0 + \\frac{1}{2}\\delta_{-1}\\) and \\(\\mu^- = \\frac{1}{2}\\delta_1\\). So \\(\\mu^+(\\mathbb{R}) = 3/2\\), \\(\\mu^-(\\mathbb{R}) = 1/2\\), \\(|\\mu|(\\mathbb{R}) = 2\\). \\(\\int \\cos(\\pi x)\\,d\\mu = \\cos(0) - \\frac{1}{2}\\cos(\\pi) + \\frac{1}{2}\\cos(-\\pi) = 1 - \\frac{1}{2}(-1) + \\frac{1}{2}(-1) = 1\\).'
                },
                {
                    question: '<strong>[Computational, 3 stars]</strong> Let \\(X = (0,\\infty)\\) with the Euclidean topology. Consider \\(I(f) = \\sum_{n=1}^\\infty \\frac{f(n)}{n^2}\\) for \\(f \\in C_c(X)\\). Find the Radon measure \\(\\mu\\) and compute \\(\\mu(X)\\) and \\(\\mu((2.5, 4.5))\\).',
                    hint: 'The functional picks off values at positive integers with weights \\(1/n^2\\).',
                    solution: '\\(\\mu = \\sum_{n=1}^\\infty \\frac{1}{n^2} \\delta_n\\). \\(\\mu(X) = \\sum_{n=1}^\\infty 1/n^2 = \\pi^2/6\\). \\(\\mu((2.5, 4.5)) = \\mu(\\{3\\}) + \\mu(\\{4\\}) = 1/9 + 1/16 = 25/144\\).'
                },

                // --- PROOF (7 exercises) ---
                {
                    question: '<strong>[Proof, 2 stars]</strong> Let \\(X\\) be LCH and let \\(I\\) be a positive linear functional on \\(C_c(X)\\). Prove that if \\(f, g \\in C_c(X)\\) with \\(f = g\\) on \\(\\operatorname{supp}(f) \\cup \\operatorname{supp}(g)\\), then \\(I(f) = I(g)\\). Conclude that \\(I\\) depends on \\(f\\) only through its values, not through any particular extension beyond the support.',
                    hint: 'Use linearity: \\(I(f) - I(g) = I(f-g)\\). What is \\(f - g\\)?',
                    solution: 'If \\(f = g\\) on \\(\\operatorname{supp}(f) \\cup \\operatorname{supp}(g)\\), then \\(f - g = 0\\) everywhere (since \\(f-g\\) is supported on \\(\\operatorname{supp}(f) \\cup \\operatorname{supp}(g)\\) and vanishes there). So \\(I(f-g) = I(0) = 0\\), giving \\(I(f) = I(g)\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Let \\(X\\) be LCH and \\(\\mu\\) a Radon measure on \\(X\\). Prove that \\(C_c(X)\\) is dense in \\(L^p(\\mu)\\) for \\(1 \\leq p < \\infty\\).',
                    hint: 'It suffices to approximate indicator functions \\(\\mathbf{1}_E\\) for Borel sets \\(E\\) of finite measure. Use outer and inner regularity to sandwich \\(E\\) between compact \\(K\\) and open \\(U\\), then use Urysohn to find \\(f \\in C_c(X)\\) with \\(K \\prec f \\prec U\\).',
                    solution: 'Given \\(\\varepsilon > 0\\) and a Borel \\(E\\) with \\(\\mu(E) < \\infty\\), find compact \\(K \\subseteq E \\subseteq U\\) open with \\(\\mu(U \\setminus K) < \\varepsilon\\). By Urysohn, find \\(f \\in C_c(X)\\) with \\(K \\prec f \\prec U\\). Then \\(\\|\\mathbf{1}_E - f\\|_p^p \\leq \\mu(U \\setminus K) < \\varepsilon\\). Since simple functions (finite sums of indicators of finite-measure sets) are dense in \\(L^p\\), and each indicator is approximable by \\(C_c\\) functions, \\(C_c(X)\\) is dense in \\(L^p(\\mu)\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Prove uniqueness in the Riesz theorem: if \\(\\mu_1\\) and \\(\\mu_2\\) are Radon measures with \\(\\int f\\,d\\mu_1 = \\int f\\,d\\mu_2\\) for all \\(f \\in C_c(X)\\), then \\(\\mu_1 = \\mu_2\\).',
                    hint: 'Show \\(\\mu_1(U) = \\mu_2(U)\\) for all open \\(U\\) using the definition \\(\\mu(U) = \\sup\\{I(f) : f \\prec U\\}\\). Then use outer regularity.',
                    solution: 'For any open \\(U\\), \\(\\mu_1(U) = \\sup\\{\\int f\\,d\\mu_1 : f \\prec U\\} = \\sup\\{\\int f\\,d\\mu_2 : f \\prec U\\} = \\mu_2(U)\\) (the middle equality uses the hypothesis). For a general Borel set \\(E\\), outer regularity gives \\(\\mu_i(E) = \\inf\\{\\mu_i(U) : U \\supseteq E \\text{ open}\\}\\). Since \\(\\mu_1(U) = \\mu_2(U)\\) for all open \\(U\\), we get \\(\\mu_1(E) = \\mu_2(E)\\).'
                },
                {
                    question: '<strong>[Proof, 3 stars]</strong> Let \\(K\\) be a compact Hausdorff space. Prove that every positive linear functional \\(I\\) on \\(C(K)\\) is bounded, with \\(\\|I\\| = I(1)\\).',
                    hint: 'For any \\(f \\in C(K)\\) with \\(\\|f\\|_\\infty \\leq 1\\), observe \\(-1 \\leq f \\leq 1\\), so \\(-\\mathbf{1} \\leq f \\leq \\mathbf{1}\\).',
                    solution: 'If \\(\\|f\\|_\\infty \\leq 1\\), then \\(-\\mathbf{1} \\leq f \\leq \\mathbf{1}\\) pointwise. By monotonicity (from positivity), \\(-I(\\mathbf{1}) \\leq I(f) \\leq I(\\mathbf{1})\\), so \\(|I(f)| \\leq I(\\mathbf{1})\\). This gives \\(\\|I\\| \\leq I(\\mathbf{1})\\). For the reverse, \\(\\mathbf{1}\\) has \\(\\|\\mathbf{1}\\|_\\infty = 1\\) and \\(I(\\mathbf{1}) = I(\\mathbf{1})\\), so \\(\\|I\\| \\geq I(\\mathbf{1})\\). Equality: \\(\\|I\\| = I(\\mathbf{1}) = \\mu(K)\\).'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Prove that on an LCH space \\(X\\), a Radon measure \\(\\mu\\) is uniquely determined by its values on compact sets.',
                    hint: 'Use inner regularity on open sets: \\(\\mu(U) = \\sup\\{\\mu(K) : K \\subseteq U\\}\\). Then use outer regularity for general Borel sets.',
                    solution: 'Suppose \\(\\mu_1, \\mu_2\\) are Radon and agree on all compact sets. For any open \\(U\\): \\(\\mu_1(U) = \\sup\\{\\mu_1(K) : K \\subseteq U, K \\text{ compact}\\} = \\sup\\{\\mu_2(K) : K \\subseteq U, K \\text{ compact}\\} = \\mu_2(U)\\). For any Borel \\(E\\): \\(\\mu_1(E) = \\inf\\{\\mu_1(U) : U \\supseteq E, U \\text{ open}\\} = \\inf\\{\\mu_2(U) : U \\supseteq E, U \\text{ open}\\} = \\mu_2(E)\\). So \\(\\mu_1 = \\mu_2\\).'
                },
                {
                    question: '<strong>[Proof, 4 stars]</strong> Let \\(\\mu\\) be a finite Radon measure on a compact metrizable space \\(K\\). Prove that the support of \\(\\mu\\) is the smallest closed set of full measure: \\(\\mu(K \\setminus \\operatorname{supp}(\\mu)) = 0\\), and if \\(F\\) is closed with \\(\\mu(K \\setminus F) = 0\\), then \\(\\operatorname{supp}(\\mu) \\subseteq F\\).',
                    hint: 'Use second countability: \\(K \\setminus \\operatorname{supp}(\\mu) = \\bigcup\\{U \\text{ open} : \\mu(U)=0\\}\\) is a countable union.',
                    solution: 'Since \\(K\\) is metrizable, hence second countable, write \\(K \\setminus \\operatorname{supp}(\\mu) = \\bigcup_{n=1}^\\infty U_n\\) where each \\(U_n\\) is open with \\(\\mu(U_n) = 0\\). By countable subadditivity, \\(\\mu(K \\setminus \\operatorname{supp}(\\mu)) \\leq \\sum \\mu(U_n) = 0\\). For minimality: if \\(F\\) is closed with \\(\\mu(K \\setminus F) = 0\\), then \\(K \\setminus F\\) is open with \\(\\mu(K \\setminus F) = 0\\), so \\(K \\setminus F \\subseteq K \\setminus \\operatorname{supp}(\\mu)\\), giving \\(\\operatorname{supp}(\\mu) \\subseteq F\\).'
                },
                {
                    question: '<strong>[Proof, 5 stars]</strong> Prove that if \\(X\\) is a \\(\\sigma\\)-compact LCH space, then every Borel measure that is finite on compact sets is inner regular on all Borel sets. (This extends Proposition 16.23(2).)',
                    hint: 'Write \\(X = \\bigcup K_n\\) with \\(K_n\\) compact and \\(K_n \\subseteq K_{n+1}^\\circ\\). For a Borel set \\(E\\), \\(\\mu(E) = \\lim \\mu(E \\cap K_n)\\). Each \\(E \\cap K_n\\) has finite measure, so apply inner regularity for sets of finite measure.',
                    solution: 'Write \\(X = \\bigcup_{n=1}^\\infty K_n\\) with \\(K_n\\) compact, \\(K_n \\subseteq K_{n+1}^\\circ\\). For any Borel \\(E\\), \\(E = \\bigcup (E \\cap K_n)\\) is an increasing union, so \\(\\mu(E) = \\lim_n \\mu(E \\cap K_n)\\). Each \\(E \\cap K_n\\) is Borel with \\(\\mu(E \\cap K_n) \\leq \\mu(K_n) < \\infty\\). By Proposition 16.23(1), for each \\(\\varepsilon > 0\\), find compact \\(C_n \\subseteq E \\cap K_n\\) with \\(\\mu(C_n) > \\mu(E \\cap K_n) - \\varepsilon\\). Since \\(\\mu(E \\cap K_n) \\to \\mu(E)\\), we can choose \\(n\\) large enough that \\(\\mu(C_n) > \\mu(E) - 2\\varepsilon\\). Since \\(C_n \\subseteq E\\) is compact, inner regularity holds.'
                },

                // --- EXPLORATION (3 exercises) ---
                {
                    question: '<strong>[Exploration, 3 stars]</strong> Using the Functional-to-Measure Converter visualization, experiment with all three functional types. For the weighted functional \\(I(f) = \\int f(1+x^2)dx\\), predict \\(\\mu([0.5, 1])\\) before seeing the answer, then verify. How does the density \\(1+x^2\\) redistribute mass compared to Lebesgue measure?',
                    hint: 'Compute \\(\\int_{0.5}^{1}(1+x^2)\\,dx\\) by hand.',
                    solution: '\\(\\mu([0.5,1]) = \\int_{0.5}^1 (1+x^2)\\,dx = [x + x^3/3]_{0.5}^1 = (1 + 1/3) - (1/2 + 1/24) = 4/3 - 13/24 = 19/24 \\approx 0.792\\). Lebesgue measure gives \\(1/2 = 0.5\\). The weight \\(1+x^2\\) puts more mass near \\(x=1\\) (where \\(1+x^2 = 2\\)) than near \\(x=0\\) (where \\(1+x^2 = 1\\)), so intervals near 1 get roughly twice the mass of equal-length intervals near 0.'
                },
                {
                    question: '<strong>[Exploration, 4 stars]</strong> Using the Weak Convergence Animator, observe the "point masses escaping to infinity" sequence. Explain why \\(\\delta_n \\xrightarrow{v} 0\\) (the zero measure) even though each \\(\\delta_n\\) has total mass 1. What topological property of \\(C_c(X)\\) is responsible? How would the conclusion change if we tested against \\(C_b(X)\\) (bounded continuous functions) instead?',
                    hint: 'Every \\(f \\in C_c(\\mathbb{R})\\) vanishes outside a compact set. What happens to \\(f(n)\\) for large \\(n\\)?',
                    solution: 'For any \\(f \\in C_c(\\mathbb{R})\\), there exists \\(R > 0\\) with \\(\\operatorname{supp}(f) \\subseteq [-R, R]\\). For \\(n > R\\), \\(\\int f\\,d\\delta_n = f(n) = 0\\). So \\(\\int f\\,d\\delta_n \\to 0 = \\int f\\,d(\\text{zero measure})\\). This is vague convergence to the zero measure. If we tested against \\(C_b\\), then \\(f \\equiv 1\\) gives \\(\\int 1\\,d\\delta_n = 1 \\not\\to 0\\), so \\(\\delta_n\\) does not converge weakly (in the \\(C_b\\) sense). The compact support requirement is what allows mass to "escape." This is why probabilists add tightness conditions.'
                },
                {
                    question: '<strong>[Exploration, 5 stars]</strong> Using the Dual Pairing visualization, compute \\(\\langle f, \\mu \\rangle\\) for all 12 combinations of test function and measure. Organize your results in a table. Which measure-function pair gives the largest absolute value? Can you find a general principle for when the pairing is large?',
                    hint: 'The pairing is large when the function is large (in absolute value) where the measure concentrates mass.',
                    solution: 'Table of \\(\\langle f, \\mu \\rangle = \\int f\\,d\\mu\\): For \\(\\mu = \\delta_0 - \\delta_1\\): \\(f=x\\) gives \\(0-1=-1\\); \\(f=x^2\\) gives \\(0-1=-1\\); \\(f=\\cos(\\pi x)\\) gives \\(1-(-1)=2\\); \\(f=e^{-x^2}\\) gives \\(1-e^{-1} \\approx 0.632\\). For \\(\\mu=N(0,1)\\): \\(f=x\\) gives \\(0\\); \\(f=x^2\\) gives \\(1\\); \\(f=\\cos(\\pi x)\\) gives \\(e^{-\\pi^2/2}\\approx 0.007\\); \\(f=e^{-x^2}\\) gives \\(1/\\sqrt{3}\\approx 0.577\\). For \\(\\mu=\\text{Leb}|_{[0,1]}\\): \\(f=x\\) gives \\(1/2\\); \\(f=x^2\\) gives \\(1/3\\); \\(f=\\cos(\\pi x)\\) gives \\(0\\); \\(f=e^{-x^2}\\) gives \\(\\approx 0.747\\). Largest: \\(\\cos(\\pi x)\\) with \\(\\delta_0-\\delta_1\\), value \\(2\\). Principle: the pairing is large when \\(f\\) aligns with the measure (large where \\(\\mu\\) has positive mass, small where \\(\\mu\\) has negative mass).'
                }
            ]
        },
    ]
});
