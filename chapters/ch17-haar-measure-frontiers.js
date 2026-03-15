window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Haar Measure, Invariance, and Frontiers',
    subtitle: 'Measures on Groups, Geometric Measure Theory, and Open Problems',
    sections: [
        // ============================================================
        // Section 1: Topological Groups and Invariance
        // ============================================================
        {
            id: 'topological-groups-invariance',
            title: 'Topological Groups and Invariance',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>Throughout this course we have measured subsets of \\(\\mathbb{R}^n\\).</strong> Lebesgue measure has a remarkable property we have taken for granted: translating a set does not change its measure. This chapter asks a deeper question. Given an arbitrary group that also carries a topology, can we always find a measure that is invariant under the group operation? The answer, due to Haar, is yes (with mild hypotheses), and the resulting <em>Haar measure</em> is essentially unique. This single theorem unifies Lebesgue measure, counting measure, and the natural measures on matrix groups, all as instances of one construction.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define topological groups, left and right translations, and state what it means for a measure to be left-invariant. Introduce Haar measure through concrete examples before the abstract existence theorem.</p>
                </div>

                <h2>Topological Groups</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.1 (Topological Group)</div>
                    <div class="env-body">
                        <p>A <strong>topological group</strong> is a group \\((G, \\cdot)\\) equipped with a topology such that:</p>
                        <ol>
                            <li>The multiplication map \\((x, y) \\mapsto x \\cdot y\\) is continuous from \\(G \\times G \\to G\\).</li>
                            <li>The inversion map \\(x \\mapsto x^{-1}\\) is continuous from \\(G \\to G\\).</li>
                        </ol>
                        <p>Equivalently, the single map \\((x, y) \\mapsto x \\cdot y^{-1}\\) is continuous.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.2 (Fundamental Examples)</div>
                    <div class="env-body">
                        <p>Each of the following is a topological group under the indicated operation and topology:</p>
                        <ul>
                            <li>\\((\\mathbb{R}^n, +)\\) with the Euclidean topology. This is the setting of Lebesgue measure.</li>
                            <li>\\((\\mathbb{Z}, +)\\) with the discrete topology. The natural "measure" is counting measure.</li>
                            <li>\\((\\mathbb{R}^{\\times}, \\cdot)\\), the nonzero reals under multiplication, with the subspace topology from \\(\\mathbb{R}\\).</li>
                            <li>\\(\\mathrm{GL}(n, \\mathbb{R})\\), the general linear group of invertible \\(n \\times n\\) real matrices under matrix multiplication, with the subspace topology from \\(\\mathbb{R}^{n^2}\\).</li>
                            <li>The circle group \\(\\mathbb{T} = \\{z \\in \\mathbb{C} : |z| = 1\\}\\) under complex multiplication.</li>
                        </ul>
                    </div>
                </div>

                <h2>Translations and Invariance</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.3 (Left and Right Translations)</div>
                    <div class="env-body">
                        <p>For a fixed element \\(g \\in G\\), define:</p>
                        <ul>
                            <li><strong>Left translation:</strong> \\(L_g: G \\to G\\), \\(L_g(x) = g \\cdot x\\).</li>
                            <li><strong>Right translation:</strong> \\(R_g: G \\to G\\), \\(R_g(x) = x \\cdot g\\).</li>
                        </ul>
                        <p>Both \\(L_g\\) and \\(R_g\\) are homeomorphisms of \\(G\\), since \\(L_g^{-1} = L_{g^{-1}}\\) and \\(R_g^{-1} = R_{g^{-1}}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.4 (Left-Invariant Measure)</div>
                    <div class="env-body">
                        <p>A Borel measure \\(\\mu\\) on a topological group \\(G\\) is <strong>left-invariant</strong> (or <strong>left Haar</strong>) if</p>
                        \\[\\mu(gE) = \\mu(E) \\quad \\text{for all } g \\in G \\text{ and all Borel sets } E \\subseteq G,\\]
                        <p>where \\(gE = L_g(E) = \\{g \\cdot x : x \\in E\\}\\). A <strong>right-invariant</strong> measure satisfies \\(\\mu(Eg) = \\mu(E)\\) for all \\(g\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Invariance as Fairness)</div>
                    <div class="env-body">
                        <p>Left-invariance means the measure "does not care where you are in the group." If you shift every point of a set \\(E\\) by multiplying on the left by \\(g\\), the size does not change. For \\((\\mathbb{R}^n, +)\\), this is exactly translation invariance of Lebesgue measure: \\(\\lambda(x + E) = \\lambda(E)\\). For the circle group, this is rotation invariance of arc-length measure.</p>
                    </div>
                </div>

                <h2>Haar Measure: Definition and Key Examples</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.5 (Haar Measure)</div>
                    <div class="env-body">
                        <p>A <strong>left Haar measure</strong> on a locally compact topological group \\(G\\) is a nonzero, left-invariant Borel measure \\(\\mu\\) that is:</p>
                        <ol>
                            <li><strong>Outer regular:</strong> \\(\\mu(E) = \\inf\\{\\mu(U) : E \\subseteq U, \\, U \\text{ open}\\}\\) for all Borel \\(E\\).</li>
                            <li><strong>Inner regular on open sets:</strong> \\(\\mu(U) = \\sup\\{\\mu(K) : K \\subseteq U, \\, K \\text{ compact}\\}\\) for open \\(U\\).</li>
                            <li><strong>Finite on compact sets:</strong> \\(\\mu(K) < \\infty\\) for compact \\(K\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.6 (Haar Measures in Practice)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; margin-top:8px;">
                            <tr style="border-bottom:1px solid #333;">
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Group</th>
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Operation</th>
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Haar Measure</th>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\((\\mathbb{R}^n, +)\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Addition</td>
                                <td style="padding:4px;color:#c9d1d9;">Lebesgue measure \\(\\lambda^n\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\((\\mathbb{Z}, +)\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Addition</td>
                                <td style="padding:4px;color:#c9d1d9;">Counting measure</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\((\\mathbb{R}^+, \\cdot)\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Multiplication</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(dx/x\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\(\\mathbb{T}\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Complex mult.</td>
                                <td style="padding:4px;color:#c9d1d9;">Arc-length \\(d\\theta / 2\\pi\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">\\(\\mathrm{GL}(n,\\mathbb{R})\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Matrix mult.</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(|\\det A|^{-n}\\,dA\\)</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why \\(dx/x\\) for Multiplication?)</div>
                    <div class="env-body">
                        <p>For \\((\\mathbb{R}^+, \\cdot)\\), ordinary Lebesgue measure is <em>not</em> invariant: scaling \\(E\\) by \\(a > 0\\) gives \\(\\lambda(aE) = a\\lambda(E) \\neq \\lambda(E)\\). The measure \\(d\\mu = dx/x\\) compensates: under the substitution \\(y = ax\\), \\(dy/y = dx/x\\). Equivalently, the logarithm \\(\\log: (\\mathbb{R}^+, \\cdot) \\to (\\mathbb{R}, +)\\) is an isomorphism, and \\(dx/x\\) is the pullback of Lebesgue measure through this isomorphism.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (GL(n) and the Determinant Factor)</div>
                    <div class="env-body">
                        <p>For \\(\\mathrm{GL}(n, \\mathbb{R})\\), left multiplication \\(A \\mapsto BA\\) is a linear map on \\(\\mathbb{R}^{n^2}\\). By the change-of-variables formula, Lebesgue measure transforms by \\(|\\det B|^n\\). To compensate, the Haar measure is \\(|\\det A|^{-n} \\, dA\\), where \\(dA\\) denotes Lebesgue measure on the \\(n^2\\) matrix entries.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="haar-matrix-groups"></div>

                <p><strong>Reference alignment:</strong> Folland 11.1; Halmos "Measure Theory" Ch. XII; Nachbin "The Haar Integral"; Rudin "Fourier Analysis on Groups" 1.1.</p>
            `,
            visualizations: [
                {
                    id: 'haar-matrix-groups',
                    title: 'Haar Measure on Groups',
                    description: 'Visualize invariance of Haar measure. Choose a group (R, R+, circle, GL(2)). A random set of points is drawn; applying a group element shows that the "density" reshapes but the Haar-weighted total is preserved.',
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

                        var groupType = 'real-line';
                        var translationParam = 1.0;
                        var numPoints = 80;
                        var points = [];
                        var transformed = [];

                        function generatePoints() {
                            points = [];
                            for (var i = 0; i < numPoints; i++) {
                                if (groupType === 'real-line') {
                                    points.push(Math.random() * 4 - 2);
                                } else if (groupType === 'positive-reals') {
                                    points.push(Math.exp(Math.random() * 3 - 1));
                                } else if (groupType === 'circle') {
                                    points.push(Math.random() * 2 * Math.PI);
                                } else {
                                    points.push([Math.random() * 2 - 1, Math.random() * 2 - 1]);
                                }
                            }
                            applyTranslation();
                        }

                        function applyTranslation() {
                            transformed = [];
                            for (var i = 0; i < points.length; i++) {
                                var p = points[i];
                                if (groupType === 'real-line') {
                                    transformed.push(p + translationParam);
                                } else if (groupType === 'positive-reals') {
                                    transformed.push(p * translationParam);
                                } else if (groupType === 'circle') {
                                    transformed.push((p + translationParam) % (2 * Math.PI));
                                } else {
                                    var c = Math.cos(translationParam), s = Math.sin(translationParam);
                                    transformed.push([c * p[0] - s * p[1], s * p[0] + c * p[1]]);
                                }
                            }
                        }

                        var groupSelect = document.createElement('select');
                        groupSelect.style.cssText = 'background:#1a1a40;color:#c9d1d9;border:1px solid #333;padding:4px 8px;border-radius:4px;margin-right:8px;';
                        [{v:'real-line',t:'(R, +)'},{v:'positive-reals',t:'(R+, x)'},{v:'circle',t:'Circle T'},{v:'gl2',t:'SO(2) rotation'}].forEach(function(opt) {
                            var o = document.createElement('option');
                            o.value = opt.v; o.textContent = opt.t;
                            groupSelect.appendChild(o);
                        });
                        groupSelect.onchange = function() {
                            groupType = this.value;
                            translationParam = groupType === 'positive-reals' ? 2.0 : 1.0;
                            generatePoints();
                            draw();
                        };
                        controls.appendChild(groupSelect);

                        VizEngine.createSlider(controls, 'Group element g', -3, 3, translationParam, 0.1, function(v) {
                            translationParam = v;
                            applyTranslation();
                            draw();
                        });

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text;
                            ctx.font = '14px serif';
                            ctx.fillText('Original points (blue) vs Translated points (orange)', 20, 25);

                            var midY = H / 2;

                            if (groupType === 'circle') {
                                var cx = W / 2, cy = midY, r = Math.min(W, H) * 0.32;
                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.arc(cx, cy, r, 0, 2 * Math.PI);
                                ctx.stroke();

                                for (var i = 0; i < points.length; i++) {
                                    ctx.fillStyle = colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(cx + r * Math.cos(points[i]), cy - r * Math.sin(points[i]), 3, 0, 2 * Math.PI);
                                    ctx.fill();

                                    ctx.fillStyle = colors.orange;
                                    ctx.beginPath();
                                    ctx.arc(cx + r * Math.cos(transformed[i]), cy - r * Math.sin(transformed[i]), 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }

                                ctx.fillStyle = colors.muted;
                                ctx.font = '13px serif';
                                ctx.fillText('Arc-length measure is rotation-invariant: mu(gE) = mu(E)', 20, H - 15);
                            } else if (groupType === 'gl2') {
                                var cx = W / 2, cy = midY, scale = Math.min(W, H) * 0.16;
                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(cx - scale * 2, cy);
                                ctx.lineTo(cx + scale * 2, cy);
                                ctx.moveTo(cx, cy - scale * 2);
                                ctx.lineTo(cx, cy + scale * 2);
                                ctx.stroke();

                                for (var i = 0; i < points.length; i++) {
                                    ctx.fillStyle = colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(cx + points[i][0] * scale, cy - points[i][1] * scale, 3, 0, 2 * Math.PI);
                                    ctx.fill();

                                    ctx.fillStyle = colors.orange;
                                    ctx.beginPath();
                                    ctx.arc(cx + transformed[i][0] * scale, cy - transformed[i][1] * scale, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }

                                ctx.fillStyle = colors.muted;
                                ctx.font = '13px serif';
                                ctx.fillText('Rotation preserves area (det = 1), so Lebesgue = Haar for SO(2)', 20, H - 15);
                            } else {
                                // 1D groups: real line or positive reals
                                var margin = 60;
                                var plotW = W - 2 * margin;
                                var xMin, xMax;
                                if (groupType === 'real-line') {
                                    xMin = -5; xMax = 5;
                                } else {
                                    xMin = 0.01; xMax = 10;
                                }

                                function toScreenX(val) {
                                    return margin + (val - xMin) / (xMax - xMin) * plotW;
                                }

                                // Axis
                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(margin, midY - 50);
                                ctx.lineTo(W - margin, midY - 50);
                                ctx.moveTo(margin, midY + 60);
                                ctx.lineTo(W - margin, midY + 60);
                                ctx.stroke();

                                ctx.fillStyle = colors.muted;
                                ctx.font = '12px serif';
                                ctx.fillText('Original E', margin, midY - 60);
                                ctx.fillText('Translated gE', margin, midY + 50);

                                for (var i = 0; i < points.length; i++) {
                                    var sx1 = toScreenX(points[i]);
                                    var sx2 = toScreenX(transformed[i]);
                                    if (sx1 > margin && sx1 < W - margin) {
                                        ctx.fillStyle = colors.blue;
                                        ctx.beginPath();
                                        ctx.arc(sx1, midY - 50, 3, 0, 2 * Math.PI);
                                        ctx.fill();
                                    }
                                    if (sx2 > margin && sx2 < W - margin) {
                                        ctx.fillStyle = colors.orange;
                                        ctx.beginPath();
                                        ctx.arc(sx2, midY + 60, 3, 0, 2 * Math.PI);
                                        ctx.fill();
                                    }
                                }

                                var haarLabel = groupType === 'real-line'
                                    ? 'Haar = Lebesgue dx: translation-invariant'
                                    : 'Haar = dx/x: scaling-invariant (points spread but measure preserved)';
                                ctx.fillStyle = colors.muted;
                                ctx.font = '13px serif';
                                ctx.fillText(haarLabel, 20, H - 15);
                            }
                        }

                        generatePoints();
                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 2: Existence and Uniqueness
        // ============================================================
        {
            id: 'existence-uniqueness',
            title: 'Existence and Uniqueness',
            content: `
                <div class="bridge section-bridge">
                    <p>The examples in Section 1 were found by explicit computation. But how do we know that <em>every</em> locally compact group carries a Haar measure? And is there only one? The existence theorem, proved independently by Haar (1933) and streamlined by Weil and Cartan, is one of the great results of 20th-century analysis. Uniqueness (up to a positive scalar) means that a locally compact group has a canonical notion of "volume," determined by its topology and algebra alone.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State the existence and uniqueness theorem for Haar measure. Sketch the key ideas of the proof. Introduce the modular function, which measures the failure of left Haar measure to be right-invariant, and define unimodular groups.</p>
                </div>

                <h2>The Main Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.7 (Existence and Uniqueness of Haar Measure)</div>
                    <div class="env-body">
                        <p>Let \\(G\\) be a locally compact Hausdorff topological group. Then:</p>
                        <ol>
                            <li><strong>Existence:</strong> There exists a left Haar measure \\(\\mu\\) on \\(G\\).</li>
                            <li><strong>Uniqueness:</strong> If \\(\\mu\\) and \\(\\nu\\) are both left Haar measures on \\(G\\), then \\(\\nu = c\\,\\mu\\) for some constant \\(c > 0\\).</li>
                        </ol>
                        <p>The same statement holds for right Haar measures.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why Locally Compact?)</div>
                    <div class="env-body">
                        <p>Local compactness is essential. It guarantees the existence of compact neighborhoods on which the measure is finite and positive. Without this, the covering arguments in the proof break down. Infinite-dimensional groups (like the additive group of an infinite-dimensional Banach space) typically fail to carry any Haar measure at all.</p>
                    </div>
                </div>

                <h2>Proof Sketch</h2>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch (Existence via Covering Numbers)</div>
                    <div class="env-body">
                        <p>The idea, due to Haar and refined by Weil, proceeds in three steps.</p>

                        <p><strong>Step 1 (Covering numbers).</strong> Fix a compact set \\(K_0\\) with nonempty interior as a "unit of volume." For any compact \\(K\\) and open set \\(U \\ni e\\), define the <em>covering number</em> \\((K : U)\\) as the minimum number of left translates of \\(U\\) needed to cover \\(K\\):</p>
                        \\[(K : U) = \\min\\{n : K \\subseteq g_1 U \\cup \\cdots \\cup g_n U\\}.\\]

                        <p><strong>Step 2 (Approximate measures).</strong> For each open neighborhood \\(U\\) of the identity, define the ratio</p>
                        \\[\\mu_U(K) = \\frac{(K : U)}{(K_0 : U)}.\\]
                        <p>This is left-invariant (since \\((gK : U) = (K : U)\\)) and satisfies \\(\\mu_U(K_0) = 1\\). It is "approximately additive" for disjoint compact sets when \\(U\\) is small.</p>

                        <p><strong>Step 3 (Limit via compactness).</strong> For each compact \\(K\\), the values \\(\\mu_U(K)\\) lie in the compact interval \\([0, (K : K_0)]\\). By Tychonoff's theorem (taking the product over all compact \\(K\\)), some subnet of \\(\\mu_U\\) converges as \\(U \\to \\{e\\}\\). The limit is a left-invariant, finitely additive, regular content on compact sets. By the Riesz representation theorem, it extends to a Radon measure.</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch (Uniqueness)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\mu\\) and \\(\\nu\\) are both left Haar measures. Fix \\(f \\in C_c(G)\\) with \\(\\int f\\,d\\mu > 0\\). For any \\(g \\in C_c(G)\\) with \\(\\int g\\,d\\mu > 0\\), define</p>
                        \\[c(f, g) = \\frac{\\int g\\,d\\nu}{\\int g\\,d\\mu}.\\]
                        <p>Using the Fubini theorem (applied with both \\(\\mu\\) and \\(\\nu\\)) and left-invariance, one shows that \\(c(f, g)\\) is independent of \\(g\\). Hence \\(\\nu = c\\,\\mu\\) with \\(c = c(f, g)\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>The Modular Function</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.8 (Modular Function)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) be a left Haar measure on \\(G\\). For each \\(g \\in G\\), the measure \\(E \\mapsto \\mu(Eg)\\) is also a left Haar measure (check: \\(\\mu(hEg) = \\mu(Eg)\\) by left-invariance). By uniqueness, there exists a constant \\(\\Delta(g) > 0\\) such that</p>
                        \\[\\mu(Eg) = \\Delta(g)\\,\\mu(E) \\quad \\text{for all Borel } E.\\]
                        <p>The function \\(\\Delta: G \\to (0, \\infty)\\) is called the <strong>modular function</strong>. It is a continuous group homomorphism: \\(\\Delta(gh) = \\Delta(g)\\Delta(h)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.9 (Unimodular Group)</div>
                    <div class="env-body">
                        <p>A locally compact group \\(G\\) is <strong>unimodular</strong> if \\(\\Delta \\equiv 1\\), meaning left Haar measure is also right-invariant. In this case, there is a single (up to scalar) measure that is simultaneously left- and right-invariant.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.10 (Unimodular and Non-Unimodular Groups)</div>
                    <div class="env-body">
                        <p><strong>Unimodular:</strong></p>
                        <ul>
                            <li>All abelian groups (since \\(gE = Eg\\) for abelian groups, left = right invariance).</li>
                            <li>All compact groups (since \\(\\Delta: G \\to \\mathbb{R}^+\\) is continuous and \\(G\\) is compact, \\(\\Delta(G)\\) is a compact subgroup of \\((\\mathbb{R}^+, \\cdot)\\), hence \\(\\{1\\}\\)).</li>
                            <li>All discrete groups (counting measure is both left- and right-invariant).</li>
                            <li>\\(\\mathrm{GL}(n, \\mathbb{R})\\), \\(\\mathrm{SL}(n, \\mathbb{R})\\), semisimple Lie groups.</li>
                        </ul>
                        <p><strong>Non-unimodular:</strong> The "\\(ax + b\\)" group of affine transformations \\(x \\mapsto ax + b\\) on \\(\\mathbb{R}\\) (with \\(a > 0\\)). Left Haar measure is \\(da\\,db / a^2\\); right Haar measure is \\(da\\,db / a\\). The modular function is \\(\\Delta(a, b) = 1/a\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 17.11 (Relating Left and Right Haar Measures)</div>
                    <div class="env-body">
                        <p>If \\(\\mu_L\\) is a left Haar measure, then</p>
                        \\[d\\mu_R(x) = \\Delta(x^{-1})\\,d\\mu_L(x)\\]
                        <p>defines a right Haar measure. The inversion formula relates the two:</p>
                        \\[\\int_G f(x^{-1})\\,\\Delta(x^{-1})\\,d\\mu_L(x) = \\int_G f(x)\\,d\\mu_L(x).\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="modular-function-demo"></div>

                <p><strong>Reference alignment:</strong> Folland 11.1, 11.2; Halmos Ch. XII; Hewitt-Ross "Abstract Harmonic Analysis" I; Nachbin "The Haar Integral."</p>
            `,
            visualizations: [
                {
                    id: 'modular-function-demo',
                    title: 'Modular Function Demo',
                    description: 'Visualize the modular function for the ax+b group. A rectangle in (a,b)-space is shown. Left and right translations distort it differently; the modular function Delta(a,b) = 1/a measures the discrepancy.',
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

                        var gA = 2.0;
                        var gB = 0.0;

                        VizEngine.createSlider(controls, 'a (scaling)', 0.2, 5, gA, 0.1, function(v) {
                            gA = v; draw();
                        });
                        VizEngine.createSlider(controls, 'b (translation)', -3, 3, gB, 0.1, function(v) {
                            gB = v; draw();
                        });

                        // The ax+b group: (a1,b1)*(a2,b2) = (a1*a2, a1*b2+b1)
                        // Left translate of (a,b) by (gA,gB): (gA*a, gA*b + gB)
                        // Right translate of (a,b) by (gA,gB): (a*gA, a*gB + b)

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px serif';
                            ctx.fillText('ax+b group: modular function Delta(a,b) = 1/a', 20, 25);

                            var midX = W / 2;
                            // Left panel: left translation, Right panel: right translation
                            var panelW = midX - 30;
                            var margin = 40;

                            function drawPanel(offsetX, label, transformFn) {
                                ctx.fillStyle = colors.muted;
                                ctx.font = '13px serif';
                                ctx.fillText(label, offsetX + 10, 50);

                                // Draw axes
                                var ox = offsetX + panelW / 2;
                                var oy = H / 2 + 30;
                                var scaleX = panelW / 8;
                                var scaleY = (H - 120) / 8;

                                ctx.strokeStyle = colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(offsetX + 10, oy);
                                ctx.lineTo(offsetX + panelW - 10, oy);
                                ctx.moveTo(ox, 60);
                                ctx.lineTo(ox, H - 20);
                                ctx.stroke();

                                // Original rectangle in (a,b) space: a in [1,2], b in [-0.5,0.5]
                                var rect = [[1, -0.5], [2, -0.5], [2, 0.5], [1, 0.5]];

                                // Draw original
                                ctx.strokeStyle = colors.blue;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= rect.length; i++) {
                                    var pt = rect[i % rect.length];
                                    var sx = ox + pt[0] * scaleX;
                                    var sy = oy - pt[1] * scaleY;
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                // Draw transformed
                                ctx.strokeStyle = colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                var nPts = 40;
                                for (var edge = 0; edge < 4; edge++) {
                                    var p1 = rect[edge], p2 = rect[(edge + 1) % 4];
                                    for (var j = 0; j <= nPts; j++) {
                                        var t = j / nPts;
                                        var a = p1[0] + t * (p2[0] - p1[0]);
                                        var b = p1[1] + t * (p2[1] - p1[1]);
                                        var tr = transformFn(a, b);
                                        var sx = ox + tr[0] * scaleX;
                                        var sy = oy - tr[1] * scaleY;
                                        if (edge === 0 && j === 0) ctx.moveTo(sx, sy);
                                        else ctx.lineTo(sx, sy);
                                    }
                                }
                                ctx.stroke();

                                // Labels
                                ctx.fillStyle = colors.blue;
                                ctx.font = '11px serif';
                                ctx.fillText('Original', offsetX + 10, H - 5);
                                ctx.fillStyle = colors.orange;
                                ctx.fillText('Transformed', offsetX + 80, H - 5);
                            }

                            drawPanel(0, 'Left translation by (a=' + gA.toFixed(1) + ', b=' + gB.toFixed(1) + ')', function(a, b) {
                                return [gA * a, gA * b + gB];
                            });

                            drawPanel(midX, 'Right translation by (a=' + gA.toFixed(1) + ', b=' + gB.toFixed(1) + ')', function(a, b) {
                                return [a * gA, a * gB + b];
                            });

                            // Divider
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(midX - 5, 40);
                            ctx.lineTo(midX - 5, H - 10);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Modular function annotation
                            ctx.fillStyle = colors.teal;
                            ctx.font = '13px serif';
                            ctx.fillText('Delta(' + gA.toFixed(1) + ', ' + gB.toFixed(1) + ') = 1/' + gA.toFixed(1) + ' = ' + (1/gA).toFixed(3), 20, H - 20);
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 3: Hausdorff Measure and Dimension
        // ============================================================
        {
            id: 'hausdorff-measure-dimension',
            title: 'Hausdorff Measure and Dimension',
            content: `
                <div class="bridge section-bridge">
                    <p>Haar measure equips groups with invariant volume. But many sets of interest (curves, surfaces, fractals) live in \\(\\mathbb{R}^n\\) yet have "the wrong dimension" for Lebesgue measure to see them: a curve in \\(\\mathbb{R}^2\\) has Lebesgue measure zero, and a fractal might have a dimension that is not even an integer. <em>Hausdorff measure</em> generalizes Lebesgue measure to assign meaningful \\(s\\)-dimensional content to such sets, for any real \\(s \\geq 0\\). The resulting <em>Hausdorff dimension</em> is the central notion of fractal geometry.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the Hausdorff outer measure \\(\\mathcal{H}^s\\) and Hausdorff dimension. Compute Hausdorff dimension for classical examples. Establish the critical threshold behavior: below the dimension, \\(\\mathcal{H}^s = \\infty\\); above it, \\(\\mathcal{H}^s = 0\\).</p>
                </div>

                <h2>Hausdorff Outer Measure</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.12 (Hausdorff Outer Measure)</div>
                    <div class="env-body">
                        <p>Let \\(A \\subseteq \\mathbb{R}^n\\) and let \\(s \\geq 0\\), \\(\\delta > 0\\). Define</p>
                        \\[\\mathcal{H}^s_\\delta(A) = \\inf\\left\\{\\sum_{j=1}^{\\infty} (\\operatorname{diam} U_j)^s : A \\subseteq \\bigcup_{j=1}^{\\infty} U_j, \\; \\operatorname{diam} U_j \\leq \\delta\\right\\},\\]
                        <p>where the infimum is over all countable covers of \\(A\\) by sets of diameter at most \\(\\delta\\). The <strong>\\(s\\)-dimensional Hausdorff outer measure</strong> is</p>
                        \\[\\mathcal{H}^s(A) = \\lim_{\\delta \\to 0^+} \\mathcal{H}^s_\\delta(A) = \\sup_{\\delta > 0} \\mathcal{H}^s_\\delta(A).\\]
                        <p>The limit exists (possibly \\(= \\infty\\)) because \\(\\mathcal{H}^s_\\delta(A)\\) is non-decreasing as \\(\\delta \\downarrow 0\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Covering at Scale \\(\\delta\\))</div>
                    <div class="env-body">
                        <p>Think of \\(\\mathcal{H}^s_\\delta\\) as measuring \\(A\\) by covering it with tiny sets of diameter \\(\\leq \\delta\\), then summing (diameter)\\(^s\\). As \\(\\delta \\to 0\\), the covers must become finer, and the infimum can only increase. The parameter \\(s\\) plays the role of "dimension": if \\(s\\) matches the "true dimension" of \\(A\\), the sum stays finite and positive. Too small an \\(s\\) gives \\(\\infty\\); too large gives 0.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.13 (\\(\\mathcal{H}^s\\) Is a Metric Outer Measure)</div>
                    <div class="env-body">
                        <p>For each \\(s \\geq 0\\), \\(\\mathcal{H}^s\\) is a metric outer measure on \\(\\mathbb{R}^n\\). By Caratheodory's theorem, every Borel set is \\(\\mathcal{H}^s\\)-measurable. Moreover:</p>
                        <ol>
                            <li>\\(\\mathcal{H}^0\\) is counting measure.</li>
                            <li>\\(\\mathcal{H}^1\\) on \\(\\mathbb{R}\\) equals Lebesgue measure \\(\\lambda\\).</li>
                            <li>\\(\\mathcal{H}^n\\) on \\(\\mathbb{R}^n\\) equals \\(c_n \\cdot \\lambda^n\\) where \\(c_n = \\omega_n / 2^n\\) and \\(\\omega_n\\) is the volume of the unit \\(n\\)-ball. (The normalization depends on the convention; many authors include a factor to make \\(\\mathcal{H}^n = \\lambda^n\\) exactly.)</li>
                        </ol>
                    </div>
                </div>

                <h2>Hausdorff Dimension</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.14 (Critical Threshold)</div>
                    <div class="env-body">
                        <p>For any \\(A \\subseteq \\mathbb{R}^n\\), there exists a unique value \\(d \\in [0, n]\\) (possibly \\(0\\) or \\(n\\)) such that</p>
                        \\[\\mathcal{H}^s(A) = \\begin{cases} \\infty & \\text{if } s < d, \\\\ 0 & \\text{if } s > d. \\end{cases}\\]
                        <p>At \\(s = d\\), the value \\(\\mathcal{H}^d(A)\\) may be \\(0\\), finite and positive, or \\(\\infty\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.15 (Hausdorff Dimension)</div>
                    <div class="env-body">
                        <p>The <strong>Hausdorff dimension</strong> of \\(A\\) is</p>
                        \\[\\dim_H(A) = \\inf\\{s \\geq 0 : \\mathcal{H}^s(A) = 0\\} = \\sup\\{s \\geq 0 : \\mathcal{H}^s(A) = \\infty\\}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of Theorem 17.14</div>
                    <div class="env-body">
                        <p>If \\(s < t\\) and \\(\\{U_j\\}\\) is a \\(\\delta\\)-cover of \\(A\\), then</p>
                        \\[\\sum_j (\\operatorname{diam} U_j)^t = \\sum_j (\\operatorname{diam} U_j)^{t-s} (\\operatorname{diam} U_j)^s \\leq \\delta^{t-s} \\sum_j (\\operatorname{diam} U_j)^s.\\]
                        <p>Taking infimum: \\(\\mathcal{H}^t_\\delta(A) \\leq \\delta^{t-s} \\mathcal{H}^s_\\delta(A)\\). If \\(\\mathcal{H}^s(A) < \\infty\\), then as \\(\\delta \\to 0\\), the right side tends to 0, giving \\(\\mathcal{H}^t(A) = 0\\). Hence \\(\\{s : \\mathcal{H}^s(A) = 0\\}\\) is an interval \\((d, \\infty)\\) or \\([d, \\infty)\\) for some \\(d\\), and \\(\\mathcal{H}^s(A) = \\infty\\) for \\(s < d\\).</p>
                    </div>
                    <div class="qed">∎</div>
                </div>

                <h2>Classical Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 17.16 (Hausdorff Dimensions)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; margin-top:8px;">
                            <tr style="border-bottom:1px solid #333;">
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Set</th>
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">\\(\\dim_H\\)</th>
                                <th style="text-align:left;padding:4px;color:#c9d1d9;">Method</th>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Finite set of points</td>
                                <td style="padding:4px;color:#c9d1d9;">0</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\mathcal{H}^0 =\\) counting measure is finite</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Middle-thirds Cantor set \\(C\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\log 2 / \\log 3 \\approx 0.631\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Self-similarity: \\(C = \\frac{1}{3}C \\cup (\\frac{2}{3} + \\frac{1}{3}C)\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Smooth curve in \\(\\mathbb{R}^2\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">1</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\mathcal{H}^1 = \\) arc length (finite for finite curves)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Koch snowflake boundary</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\log 4 / \\log 3 \\approx 1.262\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">Self-similarity: 4 copies scaled by 1/3</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Sierpinski triangle</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\log 3 / \\log 2 \\approx 1.585\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">3 copies scaled by 1/2</td>
                            </tr>
                            <tr style="border-bottom:1px solid #222;">
                                <td style="padding:4px;color:#8b949e;">Smooth surface in \\(\\mathbb{R}^3\\)</td>
                                <td style="padding:4px;color:#c9d1d9;">2</td>
                                <td style="padding:4px;color:#c9d1d9;">\\(\\mathcal{H}^2 = \\) surface area</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.17 (Self-Similar Sets)</div>
                    <div class="env-body">
                        <p>If \\(A\\) is the attractor of an iterated function system consisting of \\(N\\) similarities, each with ratio \\(r\\), satisfying the <strong>open set condition</strong>, then</p>
                        \\[\\dim_H(A) = \\frac{\\log N}{\\log(1/r)}.\\]
                        <p>More generally, if the ratios are \\(r_1, \\ldots, r_N\\), then \\(\\dim_H(A) = s\\) where \\(s\\) is the unique solution of \\(\\sum_{i=1}^N r_i^s = 1\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Hausdorff Dimension vs. Topological Dimension)</div>
                    <div class="env-body">
                        <p>The Hausdorff dimension of a set always satisfies \\(\\dim_H(A) \\geq \\dim_{\\mathrm{top}}(A)\\), where \\(\\dim_{\\mathrm{top}}\\) is the topological (covering) dimension. Equality holds for smooth manifolds. For fractals, the strict inequality \\(\\dim_H > \\dim_{\\mathrm{top}}\\) is often taken as the <em>definition</em> of "fractal."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="hausdorff-dimension-calc"></div>

                <p><strong>Reference alignment:</strong> Folland 11.3; Falconer "Fractal Geometry" Ch. 2-3; Mattila "Geometry of Sets and Measures" Ch. 4; Stein-Shakarchi III.7.</p>
            `,
            visualizations: [
                {
                    id: 'hausdorff-dimension-calc',
                    title: 'Hausdorff Dimension Calculator',
                    description: 'Choose a self-similar fractal (Cantor set, Sierpinski triangle, Koch curve, or custom). The visualization iterates the IFS construction and computes dim_H = log(N)/log(1/r).',
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

                        var fractalType = 'cantor';
                        var iterations = 5;

                        var fractalSelect = document.createElement('select');
                        fractalSelect.style.cssText = 'background:#1a1a40;color:#c9d1d9;border:1px solid #333;padding:4px 8px;border-radius:4px;margin-right:8px;';
                        [{v:'cantor',t:'Cantor Set'},{v:'sierpinski',t:'Sierpinski Triangle'},{v:'koch',t:'Koch Curve'},{v:'carpet',t:'Sierpinski Carpet'}].forEach(function(opt) {
                            var o = document.createElement('option');
                            o.value = opt.v; o.textContent = opt.t;
                            fractalSelect.appendChild(o);
                        });
                        fractalSelect.onchange = function() {
                            fractalType = this.value;
                            draw();
                        };
                        controls.appendChild(fractalSelect);

                        VizEngine.createSlider(controls, 'Iterations', 1, 8, iterations, 1, function(v) {
                            iterations = v;
                            draw();
                        });

                        function drawCantor(x, y, len, depth, maxDepth) {
                            if (depth >= maxDepth) {
                                ctx.fillStyle = colors.teal;
                                ctx.fillRect(x, y, Math.max(len, 1), 6);
                                return;
                            }
                            drawCantor(x, y, len / 3, depth + 1, maxDepth);
                            drawCantor(x + 2 * len / 3, y, len / 3, depth + 1, maxDepth);
                        }

                        function drawSierpinski(ax, ay, bx, by, cx, cy, depth, maxDepth) {
                            if (depth >= maxDepth) {
                                ctx.fillStyle = colors.purple;
                                ctx.globalAlpha = 0.7;
                                ctx.beginPath();
                                ctx.moveTo(ax, ay);
                                ctx.lineTo(bx, by);
                                ctx.lineTo(cx, cy);
                                ctx.closePath();
                                ctx.fill();
                                ctx.globalAlpha = 1;
                                return;
                            }
                            var mx1 = (ax + bx) / 2, my1 = (ay + by) / 2;
                            var mx2 = (bx + cx) / 2, my2 = (by + cy) / 2;
                            var mx3 = (ax + cx) / 2, my3 = (ay + cy) / 2;
                            drawSierpinski(ax, ay, mx1, my1, mx3, my3, depth + 1, maxDepth);
                            drawSierpinski(mx1, my1, bx, by, mx2, my2, depth + 1, maxDepth);
                            drawSierpinski(mx3, my3, mx2, my2, cx, cy, depth + 1, maxDepth);
                        }

                        function drawKoch(x1, y1, x2, y2, depth, maxDepth) {
                            if (depth >= maxDepth) {
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();
                                return;
                            }
                            var dx = (x2 - x1) / 3, dy = (y2 - y1) / 3;
                            var px1 = x1 + dx, py1 = y1 + dy;
                            var px3 = x1 + 2 * dx, py3 = y1 + 2 * dy;
                            var px2 = (x1 + x2) / 2 - Math.sqrt(3) / 6 * (y2 - y1);
                            var py2 = (y1 + y2) / 2 + Math.sqrt(3) / 6 * (x2 - x1);
                            drawKoch(x1, y1, px1, py1, depth + 1, maxDepth);
                            drawKoch(px1, py1, px2, py2, depth + 1, maxDepth);
                            drawKoch(px2, py2, px3, py3, depth + 1, maxDepth);
                            drawKoch(px3, py3, x2, y2, depth + 1, maxDepth);
                        }

                        function drawCarpet(x, y, size, depth, maxDepth) {
                            if (depth >= maxDepth) {
                                ctx.fillStyle = colors.orange;
                                ctx.globalAlpha = 0.6;
                                ctx.fillRect(x, y, size, size);
                                ctx.globalAlpha = 1;
                                return;
                            }
                            var s = size / 3;
                            for (var i = 0; i < 3; i++) {
                                for (var j = 0; j < 3; j++) {
                                    if (i === 1 && j === 1) continue; // remove center
                                    drawCarpet(x + i * s, y + j * s, s, depth + 1, maxDepth);
                                }
                            }
                        }

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var info = {
                                cantor: {N: 2, r: 3, name: 'Cantor Set'},
                                sierpinski: {N: 3, r: 2, name: 'Sierpinski Triangle'},
                                koch: {N: 4, r: 3, name: 'Koch Curve'},
                                carpet: {N: 8, r: 3, name: 'Sierpinski Carpet'}
                            }[fractalType];

                            var dim = Math.log(info.N) / Math.log(info.r);

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px serif';
                            ctx.fillText(info.name + ': N=' + info.N + ' copies, ratio 1/' + info.r, 20, 25);
                            ctx.fillStyle = colors.teal;
                            ctx.font = '14px serif';
                            ctx.fillText('dim_H = log(' + info.N + ')/log(' + info.r + ') = ' + dim.toFixed(4), 20, 48);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px serif';
                            ctx.fillText('Iteration ' + iterations, 20, 68);

                            var margin = 30;
                            if (fractalType === 'cantor') {
                                for (var d = 0; d <= iterations; d++) {
                                    var y = 90 + d * 30;
                                    ctx.fillStyle = colors.muted;
                                    ctx.font = '11px serif';
                                    ctx.fillText('n=' + d, 5, y + 5);
                                    drawCantor(margin + 20, y, W - 2 * margin - 20, 0, d);
                                }
                            } else if (fractalType === 'sierpinski') {
                                var sz = Math.min(W - 60, H - 100) * 0.85;
                                var cx = W / 2;
                                drawSierpinski(cx - sz / 2, H - 30, cx + sz / 2, H - 30, cx, H - 30 - sz * Math.sqrt(3) / 2, 0, iterations);
                            } else if (fractalType === 'koch') {
                                ctx.strokeStyle = colors.green;
                                ctx.lineWidth = 1;
                                var kw = W - 80;
                                drawKoch(40, H * 0.6, 40 + kw, H * 0.6, 0, iterations);
                            } else if (fractalType === 'carpet') {
                                var sz = Math.min(W - 60, H - 100);
                                drawCarpet((W - sz) / 2, 80, sz, 0, iterations);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 4: Geometric Measure Theory
        // ============================================================
        {
            id: 'geometric-measure-theory',
            title: 'Geometric Measure Theory',
            content: `
                <div class="bridge section-bridge">
                    <p>Hausdorff measure tells us the "size" of a set at the right dimension. But for applications in geometry and PDE, we need more: we need to do calculus on sets that may be far from smooth. <em>Geometric measure theory</em> (GMT) provides the framework. It identifies the class of sets where classical formulas (area, coarea, divergence theorem) remain valid, and it furnishes a notion of "generalized surface" (currents) powerful enough to solve variational problems like Plateau's problem on the existence of minimal surfaces.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define rectifiable sets, state the area and coarea formulas, introduce currents as generalized surfaces, and describe how GMT resolves Plateau's problem.</p>
                </div>

                <h2>Rectifiable Sets</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.18 (Rectifiable Set)</div>
                    <div class="env-body">
                        <p>A set \\(E \\subseteq \\mathbb{R}^n\\) is <strong>\\(m\\)-rectifiable</strong> (for integer \\(0 \\leq m \\leq n\\)) if there exist countably many Lipschitz maps \\(f_j: \\mathbb{R}^m \\to \\mathbb{R}^n\\) such that</p>
                        \\[\\mathcal{H}^m\\!\\left(E \\setminus \\bigcup_{j=1}^{\\infty} f_j(\\mathbb{R}^m)\\right) = 0.\\]
                        <p>In words: up to an \\(\\mathcal{H}^m\\)-null set, \\(E\\) is covered by countably many Lipschitz images of \\(\\mathbb{R}^m\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Rectifiable = Almost Smooth)</div>
                    <div class="env-body">
                        <p>A rectifiable set is one that, while possibly very complicated globally, is "piecewise Lipschitz." At \\(\\mathcal{H}^m\\)-almost every point, it has an approximate tangent plane. Think of a crumpled piece of paper: it is 2-rectifiable in \\(\\mathbb{R}^3\\) because, despite the creases, it is still locally the image of a Lipschitz map from \\(\\mathbb{R}^2\\). The creases form a set of \\(\\mathcal{H}^2\\)-measure zero.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.19 (Rectifiable vs. Unrectifiable)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Rectifiable:</strong> Any smooth \\(m\\)-submanifold; any countable union of Lipschitz graphs; the boundary of a convex body.</li>
                            <li><strong>Unrectifiable:</strong> The product \\(C \\times C\\) of two Cantor sets in \\(\\mathbb{R}^2\\). This has \\(\\dim_H = 2 \\log 2 / \\log 3 \\approx 1.26\\) and, being totally disconnected, cannot be covered by Lipschitz curves (except for an \\(\\mathcal{H}^1\\)-null part). It is <em>purely 1-unrectifiable</em>.</li>
                        </ul>
                    </div>
                </div>

                <h2>The Area and Coarea Formulas</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.20 (Area Formula)</div>
                    <div class="env-body">
                        <p>Let \\(f: \\mathbb{R}^m \\to \\mathbb{R}^n\\) be Lipschitz with \\(m \\leq n\\). Then for every \\(\\mathcal{L}^m\\)-measurable \\(g \\geq 0\\),</p>
                        \\[\\int_{\\mathbb{R}^m} g(x) \\, J_m f(x) \\, d\\mathcal{L}^m(x) = \\int_{\\mathbb{R}^n} \\sum_{x \\in f^{-1}(y)} g(x) \\, d\\mathcal{H}^m(y),\\]
                        <p>where \\(J_m f(x) = \\sqrt{\\det(Df(x)^T Df(x))}\\) is the \\(m\\)-dimensional Jacobian. When \\(m = n\\), this reduces to the classical change-of-variables formula.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.21 (Coarea Formula)</div>
                    <div class="env-body">
                        <p>Let \\(f: \\mathbb{R}^n \\to \\mathbb{R}^m\\) be Lipschitz with \\(n \\geq m\\). Then for every \\(\\mathcal{L}^n\\)-measurable \\(g \\geq 0\\),</p>
                        \\[\\int_{\\mathbb{R}^n} g(x) \\, J_m f(x) \\, d\\mathcal{L}^n(x) = \\int_{\\mathbb{R}^m} \\left(\\int_{f^{-1}(y)} g \\, d\\mathcal{H}^{n-m}\\right) d\\mathcal{L}^m(y).\\]
                        <p>This slices the domain along level sets \\(f^{-1}(y)\\). When \\(m = 1\\) and \\(f(x) = |x|\\), it gives the familiar polar-coordinates formula.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Area and Coarea as Duals)</div>
                    <div class="env-body">
                        <p>The area formula handles maps from low to high dimension (parameterizing a surface). The coarea formula handles maps from high to low dimension (slicing by level sets). Together, they are the two workhorses of GMT, generalizing the change-of-variables theorem and Fubini's theorem to settings involving Hausdorff measures on non-smooth sets.</p>
                    </div>
                </div>

                <h2>Currents and Plateau's Problem</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.22 (Currents, Informally)</div>
                    <div class="env-body">
                        <p>An <strong>\\(m\\)-current</strong> in \\(\\mathbb{R}^n\\) is a continuous linear functional on the space of smooth, compactly supported differential \\(m\\)-forms. That is, currents are to differential forms what distributions are to test functions.</p>
                        <p>Key operations on currents:</p>
                        <ul>
                            <li><strong>Boundary:</strong> \\(\\partial T\\) is an \\((m-1)\\)-current defined by \\(\\langle \\partial T, \\omega \\rangle = \\langle T, d\\omega \\rangle\\) (generalized Stokes).</li>
                            <li><strong>Mass:</strong> \\(\\mathbf{M}(T) = \\sup\\{\\langle T, \\omega \\rangle : \\|\\omega\\|_\\infty \\leq 1\\}\\), the "area" of \\(T\\).</li>
                        </ul>
                        <p>An <strong>integral current</strong> is a current that can be represented by integration over a rectifiable set with integer multiplicity and finite mass.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.23 (Federer-Fleming Compactness Theorem)</div>
                    <div class="env-body">
                        <p>The space of integral \\(m\\)-currents in \\(\\mathbb{R}^n\\) with uniformly bounded mass and boundary mass is compact in the <strong>flat norm</strong> topology. As a consequence, minimizing sequences have convergent subsequences.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.24 (Plateau's Problem, Solved)</div>
                    <div class="env-body">
                        <p>Let \\(\\Gamma\\) be an \\((m-1)\\)-dimensional integral current in \\(\\mathbb{R}^n\\) with \\(\\partial \\Gamma = 0\\) (a cycle). Then there exists an \\(m\\)-dimensional integral current \\(T\\) with \\(\\partial T = \\Gamma\\) that minimizes mass \\(\\mathbf{M}(T)\\) among all such \\(T\\).</p>
                        <p>In the classical case \\(m = 2\\), \\(n = 3\\): given a closed wire loop \\(\\Gamma\\) in \\(\\mathbb{R}^3\\), there exists a surface of least area spanning \\(\\Gamma\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Regularity)</div>
                    <div class="env-body">
                        <p>The Federer-Fleming solution to Plateau's problem guarantees existence but not smoothness. The regularity theory, developed over decades, shows that area-minimizing currents are smooth except on a "singular set" of codimension at least 7 (in the case of hypersurfaces). For \\(m = 2\\) in \\(\\mathbb{R}^3\\), the minimizer is a smooth embedded surface except possibly at the boundary.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fractal-measure-explorer"></div>

                <p><strong>Reference alignment:</strong> Federer "Geometric Measure Theory" (the foundational text); Morgan "Geometric Measure Theory: A Beginner's Guide"; Mattila Ch. 15-18; Evans-Gariepy Ch. 3-4.</p>
            `,
            visualizations: [
                {
                    id: 'fractal-measure-explorer',
                    title: 'Fractal Measure Explorer',
                    description: 'Explore how H^s measure behaves for different values of s on a chosen fractal. A bar chart shows H^s_delta(A) as a function of s, illustrating the critical threshold where the value jumps from infinity to zero.',
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

                        var N = 2, r = 3; // Cantor default
                        var delta = 0.05;

                        var fractalSelect = document.createElement('select');
                        fractalSelect.style.cssText = 'background:#1a1a40;color:#c9d1d9;border:1px solid #333;padding:4px 8px;border-radius:4px;margin-right:8px;';
                        [{v:'cantor',t:'Cantor (N=2,r=3)',N:2,r:3},{v:'koch',t:'Koch (N=4,r=3)',N:4,r:3},{v:'sierpinski',t:'Sierpinski (N=3,r=2)',N:3,r:2},{v:'carpet',t:'Carpet (N=8,r=3)',N:8,r:3}].forEach(function(opt) {
                            var o = document.createElement('option');
                            o.value = opt.v; o.textContent = opt.t;
                            o.dataset.N = opt.N; o.dataset.r = opt.r;
                            fractalSelect.appendChild(o);
                        });
                        fractalSelect.onchange = function() {
                            var sel = this.options[this.selectedIndex];
                            N = parseInt(sel.dataset.N);
                            r = parseInt(sel.dataset.r);
                            draw();
                        };
                        controls.appendChild(fractalSelect);

                        VizEngine.createSlider(controls, 'Cover scale delta', 0.01, 0.5, delta, 0.01, function(v) {
                            delta = v; draw();
                        });

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var dimH = Math.log(N) / Math.log(r);

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px serif';
                            ctx.fillText('H^s behavior for self-similar fractal (dim_H = ' + dimH.toFixed(4) + ')', 20, 25);

                            // Approximate H^s_delta for IFS: after k iterations, N^k pieces of diameter 1/r^k
                            // H^s_delta ~ N^k * (1/r^k)^s = (N/r^s)^k where k ~ log(1/delta)/log(r)
                            var k = Math.max(1, Math.floor(Math.log(1 / delta) / Math.log(r)));

                            var margin = {l: 60, r: 30, t: 60, b: 50};
                            var plotW = W - margin.l - margin.r;
                            var plotH = H - margin.t - margin.b;

                            // Draw axes
                            ctx.strokeStyle = colors.muted;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(margin.l, margin.t);
                            ctx.lineTo(margin.l, H - margin.b);
                            ctx.lineTo(W - margin.r, H - margin.b);
                            ctx.stroke();

                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px serif';
                            ctx.fillText('s', W / 2, H - 10);
                            ctx.save();
                            ctx.translate(15, H / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('log H^s_delta', 0, 0);
                            ctx.restore();

                            // Plot log(H^s_delta) = k * log(N) - k*s*log(r) = k*(log(N) - s*log(r))
                            var sMin = 0, sMax = 3;
                            var numPts = 200;
                            var vals = [];
                            for (var i = 0; i <= numPts; i++) {
                                var s = sMin + (sMax - sMin) * i / numPts;
                                var logVal = k * (Math.log(N) - s * Math.log(r));
                                vals.push({s: s, v: logVal});
                            }

                            var vMin = -10, vMax = 10;

                            function toX(s) { return margin.l + (s - sMin) / (sMax - sMin) * plotW; }
                            function toY(v) { return margin.t + (vMax - v) / (vMax - vMin) * plotH; }

                            // Zero line
                            ctx.strokeStyle = colors.grid;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(margin.l, toY(0));
                            ctx.lineTo(W - margin.r, toY(0));
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Dimension line
                            ctx.strokeStyle = colors.yellow;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            var dimX = toX(dimH);
                            ctx.moveTo(dimX, margin.t);
                            ctx.lineTo(dimX, H - margin.b);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = colors.yellow;
                            ctx.font = '12px serif';
                            ctx.fillText('dim_H = ' + dimH.toFixed(3), dimX + 5, margin.t + 15);

                            // Plot curve
                            ctx.strokeStyle = colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= numPts; i++) {
                                var sx = toX(vals[i].s);
                                var sy = toY(Math.max(vMin, Math.min(vMax, vals[i].v)));
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Annotations
                            ctx.fillStyle = colors.red;
                            ctx.font = '13px serif';
                            ctx.fillText('H^s = infinity', toX(0.1), toY(8));
                            ctx.fillStyle = colors.green;
                            ctx.fillText('H^s = 0', toX(dimH + 0.3), toY(-5));

                            // Tick labels
                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px serif';
                            for (var s = 0; s <= sMax; s += 0.5) {
                                ctx.fillText(s.toFixed(1), toX(s) - 8, H - margin.b + 16);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: []
        },

        // ============================================================
        // Section 5: Open Problems and Frontiers
        // ============================================================
        {
            id: 'open-problems-frontiers',
            title: 'Open Problems and Frontiers',
            content: `
                <div class="bridge section-bridge">
                    <p>Measure theory is not a closed subject. From its foundations in set theory to its applications in physics and optimization, fundamental questions remain open. This final section surveys four frontiers where measure theory meets the edge of current knowledge: large cardinals and the foundations of measurability, descriptive set theory's classification of definable sets, optimal transport (which recasts classical measure theory as a geometry), and the measure-theoretic structures emerging in quantum mechanics.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Describe four active research frontiers, stating the key open problems and the measure-theoretic tools involved. This is a guided tour, not a course; the goal is to show the reader where measure theory leads.</p>
                </div>

                <h2>I. Measurable Cardinals and Foundations</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.25 (Measurable Cardinal)</div>
                    <div class="env-body">
                        <p>An uncountable cardinal \\(\\kappa\\) is <strong>measurable</strong> if there exists a \\(\\{0,1\\}\\)-valued, \\(\\kappa\\)-additive measure on the power set \\(\\mathcal{P}(\\kappa)\\) that vanishes on singletons. That is, there is a non-principal \\(\\kappa\\)-complete ultrafilter on \\(\\kappa\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why This Matters)</div>
                    <div class="env-body">
                        <p>Recall from Chapter 2 that we cannot extend Lebesgue measure to all subsets of \\(\\mathbb{R}\\). Ulam (1930) showed that no non-trivial countably additive \\(\\{0,1\\}\\)-valued measure exists on a set of cardinality \\(\\leq \\aleph_1\\) (assuming the continuum hypothesis). The existence of a measurable cardinal cannot be proved in ZFC; it is a <em>large cardinal axiom</em>. If measurable cardinals exist, the set-theoretic universe has stronger closure properties, and certain pathologies of measure theory are tamed.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.26 (Ulam's Theorem)</div>
                    <div class="env-body">
                        <p>If \\(\\kappa\\) is a measurable cardinal, then \\(\\kappa\\) is strongly inaccessible (in particular, \\(\\kappa > \\aleph_0\\), \\(\\kappa > 2^{\\aleph_0}\\), and the existence of \\(\\kappa\\) cannot be proved in ZFC). In particular, whether a measurable cardinal exists is <strong>independent of ZFC</strong>.</p>
                    </div>
                </div>

                <h2>II. Descriptive Set Theory</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.27 (Projective Hierarchy)</div>
                    <div class="env-body">
                        <p>Starting from the Borel sets \\(\\boldsymbol{\\Sigma}^0_\\alpha\\) in Polish spaces:</p>
                        <ul>
                            <li><strong>Analytic sets</strong> (\\(\\boldsymbol{\\Sigma}^1_1\\)): continuous images of Borel sets.</li>
                            <li><strong>Coanalytic sets</strong> (\\(\\boldsymbol{\\Pi}^1_1\\)): complements of analytic sets.</li>
                            <li>Continuing: \\(\\boldsymbol{\\Sigma}^1_{n+1}\\) = continuous images of \\(\\boldsymbol{\\Pi}^1_n\\) sets.</li>
                        </ul>
                        <p>The <strong>projective sets</strong> are \\(\\bigcup_n \\boldsymbol{\\Sigma}^1_n\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.28 (Measurability of Analytic Sets)</div>
                    <div class="env-body">
                        <p>Every analytic subset of a Polish space is universally measurable (measurable with respect to every complete Borel probability measure). This is provable in ZFC. However, the measurability of all \\(\\boldsymbol{\\Sigma}^1_2\\) sets requires additional axioms (e.g., sufficient large cardinals or projective determinacy).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Ongoing Program)</div>
                    <div class="env-body">
                        <p>Descriptive set theory continues to chart which definable sets are "well-behaved" (measurable, with the Baire property, satisfying the perfect set property). Under large cardinal axioms, all projective sets are Lebesgue measurable. This is one of the deepest interactions between set theory and analysis.</p>
                    </div>
                </div>

                <h2>III. Optimal Transport</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.29 (Monge-Kantorovich Problem)</div>
                    <div class="env-body">
                        <p>Given two probability measures \\(\\mu\\) and \\(\\nu\\) on Polish spaces \\(X\\) and \\(Y\\), and a cost function \\(c: X \\times Y \\to [0, \\infty]\\), the <strong>Kantorovich optimal transport problem</strong> is</p>
                        \\[\\inf_{\\pi \\in \\Pi(\\mu, \\nu)} \\int_{X \\times Y} c(x, y) \\, d\\pi(x, y),\\]
                        <p>where \\(\\Pi(\\mu, \\nu)\\) is the set of all <strong>couplings</strong> (probability measures on \\(X \\times Y\\) with marginals \\(\\mu\\) and \\(\\nu\\)).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.30 (Existence of Optimal Plans)</div>
                    <div class="env-body">
                        <p>If \\(c\\) is lower semicontinuous and \\(X, Y\\) are Polish, then the infimum is attained: there exists an optimal coupling \\(\\pi^*\\). When \\(X = Y = \\mathbb{R}^n\\) and \\(c(x,y) = |x - y|^2\\), the optimal plan is induced by the gradient of a convex function (Brenier's theorem, 1991).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.31 (Wasserstein Distance)</div>
                    <div class="env-body">
                        <p>For \\(p \\geq 1\\), the <strong>\\(p\\)-Wasserstein distance</strong> between probability measures \\(\\mu, \\nu\\) on a metric space \\((X, d)\\) is</p>
                        \\[W_p(\\mu, \\nu) = \\left(\\inf_{\\pi \\in \\Pi(\\mu, \\nu)} \\int d(x,y)^p \\, d\\pi(x,y)\\right)^{1/p}.\\]
                        <p>This metrizes weak convergence plus convergence of \\(p\\)-th moments. The space \\((\\mathcal{P}_p(X), W_p)\\) of probability measures with finite \\(p\\)-th moment is itself a complete separable metric space if \\(X\\) is.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Applications)</div>
                    <div class="env-body">
                        <p>Optimal transport has become ubiquitous: in machine learning (Wasserstein GANs, distribution comparison), in PDE (the JKO scheme interpreting the heat equation as gradient flow in Wasserstein space), in economics (matching markets), and in cosmology (reconstruction of the early universe). The measure-theoretic foundation, especially the interplay between weak convergence, tightness, and duality, is essential.</p>
                    </div>
                </div>

                <h2>IV. Quantum Measure Theory</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.32 (POVM)</div>
                    <div class="env-body">
                        <p>A <strong>positive operator-valued measure</strong> (POVM) on a measurable space \\((\\Omega, \\mathcal{F})\\) taking values in the bounded operators on a Hilbert space \\(\\mathcal{H}\\) is a map \\(E: \\mathcal{F} \\to B(\\mathcal{H})\\) such that:</p>
                        <ol>
                            <li>\\(E(A) \\geq 0\\) for all \\(A \\in \\mathcal{F}\\).</li>
                            <li>\\(E(\\Omega) = I\\) (the identity operator).</li>
                            <li>If \\(A_1, A_2, \\ldots\\) are pairwise disjoint, then \\(E(\\bigcup_n A_n) = \\sum_n E(A_n)\\) in the weak operator topology.</li>
                        </ol>
                        <p>A projection-valued measure (PVM) is the special case where each \\(E(A)\\) is an orthogonal projection. The spectral theorem says that every self-adjoint operator has a PVM.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (From Classical to Quantum)</div>
                    <div class="env-body">
                        <p>Classical measure theory assigns numbers to sets. Quantum measure theory assigns <em>operators</em> to sets. The Born rule \\(\\Pr(A) = \\mathrm{tr}(\\rho \\, E(A))\\) recovers a classical probability measure from a quantum state \\(\\rho\\) and a POVM \\(E\\). Open questions include: characterizing which families of probability measures arise from quantum states, understanding the measure-theoretic structure of quantum field theories, and making rigorous the "path integral" measures of Feynman.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="optimal-transport-viz"></div>

                <h2>Coda: The Unity of Measure Theory</h2>

                <div class="env-block remark">
                    <div class="env-title">Remark (Looking Back)</div>
                    <div class="env-body">
                        <p>We began this course with a problem: Riemann's integral could not handle the characteristic function of the rationals. Lebesgue's solution, to partition the range instead of the domain, led us to sigma-algebras, measures, and a new integral. That integral demanded convergence theorems (MCT, DCT, Fatou), which in turn demanded \\(L^p\\) spaces, product measures, differentiation theory, and finally the structural results of signed measures and Radon-Nikodym derivatives. Each chapter opened a door that the next walked through.</p>
                        <p>This final chapter has shown that the same ideas, suitably generalized, reach into group theory (Haar measure), fractal geometry (Hausdorff measure), the calculus of variations (currents and GMT), optimization (optimal transport), and quantum physics (operator-valued measures). Measure theory is not a prerequisite to be checked off; it is the language in which modern analysis, probability, and mathematical physics are written.</p>
                    </div>
                </div>

                <p><strong>Reference alignment:</strong> Villani "Optimal Transport: Old and New"; Kechris "Classical Descriptive Set Theory"; Jech "Set Theory" Ch. 10; Holevo "Statistical Structure of Quantum Theory."</p>
            `,
            visualizations: [
                {
                    id: 'optimal-transport-viz',
                    title: 'Optimal Transport Visualizer',
                    description: 'Two discrete distributions (source and target) shown as histograms. The optimal transport plan is displayed as weighted arrows. Adjust the distributions to see how the transport plan and Wasserstein distance change.',
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

                        var n = 5;
                        var source = [0.3, 0.25, 0.2, 0.15, 0.1];
                        var target = [0.1, 0.15, 0.2, 0.25, 0.3];

                        var configIdx = 0;
                        var configs = [
                            {name: 'Left-heavy to Right-heavy', s: [0.3, 0.25, 0.2, 0.15, 0.1], t: [0.1, 0.15, 0.2, 0.25, 0.3]},
                            {name: 'Uniform to Concentrated', s: [0.2, 0.2, 0.2, 0.2, 0.2], t: [0.05, 0.1, 0.7, 0.1, 0.05]},
                            {name: 'Two Peaks to One Peak', s: [0.4, 0.05, 0.1, 0.05, 0.4], t: [0.05, 0.15, 0.6, 0.15, 0.05]},
                            {name: 'Mirror Flip', s: [0.5, 0.3, 0.1, 0.06, 0.04], t: [0.04, 0.06, 0.1, 0.3, 0.5]}
                        ];

                        var configSelect = document.createElement('select');
                        configSelect.style.cssText = 'background:#1a1a40;color:#c9d1d9;border:1px solid #333;padding:4px 8px;border-radius:4px;margin-right:8px;';
                        configs.forEach(function(cfg, i) {
                            var o = document.createElement('option');
                            o.value = i; o.textContent = cfg.name;
                            configSelect.appendChild(o);
                        });
                        configSelect.onchange = function() {
                            configIdx = parseInt(this.value);
                            source = configs[configIdx].s.slice();
                            target = configs[configIdx].t.slice();
                            draw();
                        };
                        controls.appendChild(configSelect);

                        // Simple 1D optimal transport for equal-bin discrete distributions
                        // For 1D with cost |x-y|^2, optimal map is monotone rearrangement
                        function computeTransport() {
                            // Greedy north-west corner method (optimal for 1D sorted)
                            var plan = [];
                            var s = source.slice();
                            var t = target.slice();
                            var i = 0, j = 0;
                            while (i < n && j < n) {
                                var amount = Math.min(s[i], t[j]);
                                if (amount > 1e-10) {
                                    plan.push({from: i, to: j, mass: amount});
                                }
                                s[i] -= amount;
                                t[j] -= amount;
                                if (s[i] < 1e-10) i++;
                                if (t[j] < 1e-10) j++;
                            }
                            return plan;
                        }

                        function draw() {
                            var W = canvas.width, H = canvas.height;
                            ctx.fillStyle = colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = colors.text;
                            ctx.font = 'bold 14px serif';
                            ctx.fillText('Optimal Transport: ' + configs[configIdx].name, 20, 25);

                            var margin = {l: 50, r: 50, t: 50, b: 40};
                            var barW = (W - margin.l - margin.r) / n * 0.6;
                            var gap = (W - margin.l - margin.r) / n;
                            var maxH = (H - margin.t - margin.b - 80) / 2;

                            // Source (top)
                            var srcY = margin.t + maxH;
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px serif';
                            ctx.fillText('Source mu', margin.l, margin.t + 10);

                            for (var i = 0; i < n; i++) {
                                var x = margin.l + i * gap + gap * 0.2;
                                var h = source[i] * maxH / 0.5;
                                ctx.fillStyle = colors.blue;
                                ctx.globalAlpha = 0.8;
                                ctx.fillRect(x, srcY - h, barW, h);
                                ctx.globalAlpha = 1;
                                ctx.fillStyle = colors.text;
                                ctx.font = '10px serif';
                                ctx.fillText(source[i].toFixed(2), x, srcY + 12);
                            }

                            // Target (bottom)
                            var tgtY = H - margin.b - maxH;
                            ctx.fillStyle = colors.muted;
                            ctx.font = '12px serif';
                            ctx.fillText('Target nu', margin.l, H - margin.b - maxH - 5);

                            for (var i = 0; i < n; i++) {
                                var x = margin.l + i * gap + gap * 0.2;
                                var h = target[i] * maxH / 0.5;
                                ctx.fillStyle = colors.orange;
                                ctx.globalAlpha = 0.8;
                                ctx.fillRect(x, tgtY, barW, h);
                                ctx.globalAlpha = 1;
                                ctx.fillStyle = colors.text;
                                ctx.font = '10px serif';
                                ctx.fillText(target[i].toFixed(2), x, tgtY + h + 14);
                            }

                            // Transport plan arrows
                            var plan = computeTransport();
                            var totalCost = 0;

                            for (var k = 0; k < plan.length; k++) {
                                var p = plan[k];
                                var x1 = margin.l + p.from * gap + gap * 0.2 + barW / 2;
                                var x2 = margin.l + p.to * gap + gap * 0.2 + barW / 2;
                                var y1 = srcY + 5;
                                var y2 = tgtY - 5;

                                var alpha = Math.min(1, p.mass * 4);
                                ctx.strokeStyle = colors.teal;
                                ctx.globalAlpha = alpha;
                                ctx.lineWidth = Math.max(1, p.mass * 15);
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();

                                // Arrowhead
                                var angle = Math.atan2(y2 - y1, x2 - x1);
                                ctx.beginPath();
                                ctx.moveTo(x2, y2);
                                ctx.lineTo(x2 - 8 * Math.cos(angle - 0.4), y2 - 8 * Math.sin(angle - 0.4));
                                ctx.lineTo(x2 - 8 * Math.cos(angle + 0.4), y2 - 8 * Math.sin(angle + 0.4));
                                ctx.closePath();
                                ctx.fillStyle = colors.teal;
                                ctx.fill();

                                ctx.globalAlpha = 1;

                                totalCost += p.mass * (p.from - p.to) * (p.from - p.to);
                            }

                            ctx.lineWidth = 1;

                            // Wasserstein distance
                            var W2 = Math.sqrt(totalCost);
                            ctx.fillStyle = colors.yellow;
                            ctx.font = '14px serif';
                            ctx.fillText('W_2(mu, nu) = ' + W2.toFixed(4), W - 250, 25);

                            ctx.fillStyle = colors.muted;
                            ctx.font = '11px serif';
                            ctx.fillText('Arrow thickness = transported mass', 20, H - 10);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                // --- SECTION 1 EXERCISES (3 exercises) ---
                {
                    question: '<strong>[Section 1, 2 stars]</strong> Verify that \\(dx/x\\) is a left Haar measure on \\((\\mathbb{R}^+, \\cdot)\\). That is, show that for any \\(a > 0\\) and any Borel set \\(E \\subseteq \\mathbb{R}^+\\), \\(\\int_{aE} \\frac{dx}{x} = \\int_E \\frac{dx}{x}\\).',
                    hint: 'Use the substitution \\(y = ax\\), so \\(dy = a\\,dx\\) and \\(dy/y = dx/x\\).',
                    solution: 'Let \\(\\mu(E) = \\int_E dx/x\\). For \\(a > 0\\), \\(\\mu(aE) = \\int_{aE} dx/x\\). Substituting \\(x = ay\\), \\(dx = a\\,dy\\): \\(\\mu(aE) = \\int_E \\frac{a\\,dy}{ay} = \\int_E \\frac{dy}{y} = \\mu(E)\\).'
                },
                {
                    question: '<strong>[Section 1, 3 stars]</strong> Show that Haar measure on the circle group \\(\\mathbb{T} = \\{z \\in \\mathbb{C} : |z|=1\\}\\) is unique up to scalar. Specifically, if \\(\\mu\\) is a rotation-invariant Borel probability measure on \\(\\mathbb{T}\\), prove that \\(\\mu\\) must be normalized arc-length measure.',
                    hint: 'Show that \\(\\hat{\\mu}(n) = \\int e^{-in\\theta}\\,d\\mu(\\theta) = 0\\) for all \\(n \\neq 0\\) using rotation invariance, then appeal to uniqueness of Fourier coefficients.',
                    solution: 'For \\(n \\neq 0\\), invariance under rotation by \\(\\alpha\\) gives \\(\\hat{\\mu}(n) = \\int e^{-in(\\theta+\\alpha)}\\,d\\mu(\\theta) = e^{-in\\alpha}\\hat{\\mu}(n)\\). Choosing \\(\\alpha\\) such that \\(e^{-in\\alpha} \\neq 1\\) forces \\(\\hat{\\mu}(n) = 0\\). Since \\(\\hat{\\mu}(0) = \\mu(\\mathbb{T}) = 1\\), the Fourier coefficients of \\(\\mu\\) match those of normalized arc-length \\(d\\theta/2\\pi\\). By uniqueness of Fourier representations of measures, \\(\\mu = d\\theta/2\\pi\\).'
                },
                {
                    question: '<strong>[Section 1, 3 stars]</strong> Let \\(G = \\mathrm{GL}(n, \\mathbb{R})\\). Show that the left Haar measure \\(d\\mu(A) = |\\det A|^{-n}\\,dA\\) is indeed left-invariant: for any fixed \\(B \\in \\mathrm{GL}(n, \\mathbb{R})\\), \\(\\mu(BE) = \\mu(E)\\).',
                    hint: 'The map \\(A \\mapsto BA\\) is linear on \\(\\mathbb{R}^{n^2}\\) with Jacobian \\(|\\det B|^n\\). Use the change of variables formula.',
                    solution: 'The map \\(\\phi: A \\mapsto BA\\) on \\(\\mathbb{R}^{n^2}\\) is linear with Jacobian \\(|\\det B|^n\\) (each of the \\(n\\) columns is multiplied by \\(B\\), contributing a factor of \\(|\\det B|\\)). So \\(\\mu(BE) = \\int_{BE} |\\det A|^{-n}\\,dA = \\int_E |\\det(BC)|^{-n} |\\det B|^n\\,dC = \\int_E |\\det B|^{-n}|\\det C|^{-n}|\\det B|^n\\,dC = \\int_E |\\det C|^{-n}\\,dC = \\mu(E)\\).'
                },
                // --- SECTION 2 EXERCISES (3 exercises) ---
                {
                    question: '<strong>[Section 2, 2 stars]</strong> Compute the modular function \\(\\Delta(a, b)\\) of the "\\(ax+b\\)" group \\(G = \\{(a, b) : a > 0, b \\in \\mathbb{R}\\}\\) with operation \\((a_1, b_1)(a_2, b_2) = (a_1 a_2, a_1 b_2 + b_1)\\). Verify that \\(\\Delta\\) is a homomorphism.',
                    hint: 'The left Haar measure is \\(da\\,db/a^2\\). Compute \\(\\mu(E \\cdot (a_0, b_0))\\) using the change of variables \\((a, b) \\mapsto (a a_0, a b_0 + b)\\).',
                    solution: 'Right translation by \\((a_0, b_0)\\): \\((a, b)(a_0, b_0) = (a a_0, a b_0 + b)\\). The Jacobian of \\((a, b) \\mapsto (a a_0, a b_0 + b)\\) is \\(a_0\\). So \\(\\mu(E(a_0, b_0)) = \\int_{E(a_0,b_0)} \\frac{da\\,db}{a^2} = \\int_E \\frac{a_0\\,da\\,db}{(a a_0)^2} = \\frac{1}{a_0} \\int_E \\frac{da\\,db}{a^2} = \\frac{1}{a_0}\\mu(E)\\). Thus \\(\\Delta(a_0, b_0) = 1/a_0\\). Homomorphism check: \\(\\Delta((a_1, b_1)(a_2, b_2)) = \\Delta(a_1 a_2, a_1 b_2 + b_1) = 1/(a_1 a_2) = \\Delta(a_1, b_1)\\Delta(a_2, b_2)\\). \\(\\checkmark\\)'
                },
                {
                    question: '<strong>[Section 2, 3 stars]</strong> Prove that every compact topological group \\(G\\) is unimodular.',
                    hint: 'The modular function \\(\\Delta: G \\to (\\mathbb{R}^+, \\cdot)\\) is a continuous homomorphism. What are the compact subgroups of \\((\\mathbb{R}^+, \\cdot)\\)?',
                    solution: '\\(\\Delta: G \\to (\\mathbb{R}^+, \\cdot)\\) is a continuous homomorphism. Since \\(G\\) is compact and \\(\\Delta\\) is continuous, \\(\\Delta(G)\\) is a compact subset of \\(\\mathbb{R}^+\\). Since \\(\\Delta\\) is a homomorphism, \\(\\Delta(G)\\) is a subgroup. The only compact subgroup of \\((\\mathbb{R}^+, \\cdot)\\) is \\(\\{1\\}\\) (if \\(a > 1\\) were in the subgroup, then \\(a, a^2, a^3, \\ldots\\) would all be in it, giving an unbounded sequence; similarly for \\(a < 1\\)). Hence \\(\\Delta \\equiv 1\\).'
                },
                {
                    question: '<strong>[Section 2, 4 stars]</strong> Let \\(G\\) be a locally compact group with left Haar measure \\(\\mu_L\\). Prove the inversion formula: for \\(f \\in C_c(G)\\), \\(\\int_G f(x^{-1})\\Delta(x^{-1})\\,d\\mu_L(x) = \\int_G f(x)\\,d\\mu_L(x)\\).',
                    hint: 'Show that the measure \\(\\nu(E) = \\mu_L(E^{-1})\\Delta(\\cdot)\\) (suitably defined) is a left Haar measure, then use uniqueness.',
                    solution: 'Define the measure \\(\\tilde{\\mu}\\) by \\(\\int f\\,d\\tilde{\\mu} = \\int f(x^{-1})\\Delta(x^{-1})\\,d\\mu_L(x)\\). We check left-invariance: \\(\\int f(g^{-1}x^{-1})\\Delta(x^{-1})\\,d\\mu_L(x) = \\int f((xg)^{-1})\\Delta(x^{-1})\\,d\\mu_L(x)\\). Substituting \\(y = xg\\), \\(d\\mu_L(y) = \\Delta(g)\\,d\\mu_L(x)\\) (from \\(\\mu_L(Eg) = \\Delta(g)\\mu_L(E)\\)). We get \\(\\int f(y^{-1})\\Delta((yg^{-1})^{-1})\\Delta(g)^{-1}\\Delta(g)\\,d\\mu_L(y) = \\int f(y^{-1})\\Delta(y^{-1})\\,d\\mu_L(y) = \\int f\\,d\\tilde{\\mu}\\). Since \\(\\tilde{\\mu}\\) is left-invariant and nonzero, by uniqueness \\(\\tilde{\\mu} = c\\,\\mu_L\\). Testing on \\(f\\) with \\(\\int f\\,d\\mu_L = 1\\) and using both formulas gives \\(c = 1\\).'
                },
                // --- SECTION 3 EXERCISES (3 exercises) ---
                {
                    question: '<strong>[Section 3, 2 stars]</strong> Show that the Hausdorff dimension of any countable set is 0.',
                    hint: 'Bound \\(\\mathcal{H}^s_\\delta\\) by covering each point with a ball of diameter \\(\\delta\\). What happens as \\(\\delta \\to 0\\)?',
                    solution: 'Let \\(A = \\{x_1, x_2, \\ldots\\}\\). For any \\(s > 0\\) and \\(\\delta > 0\\), cover each \\(x_j\\) by a ball \\(B_j\\) of diameter \\(\\delta_j \\leq \\delta\\). Then \\(\\mathcal{H}^s_\\delta(A) \\leq \\sum_{j=1}^\\infty \\delta_j^s\\). Choosing \\(\\delta_j = \\delta/2^j\\): \\(\\sum_j (\\delta/2^j)^s = \\delta^s \\sum_j 2^{-js} = \\delta^s \\cdot \\frac{1}{2^s - 1}\\). As \\(\\delta \\to 0\\), this tends to 0. So \\(\\mathcal{H}^s(A) = 0\\) for all \\(s > 0\\), giving \\(\\dim_H(A) = 0\\).'
                },
                {
                    question: '<strong>[Section 3, 3 stars]</strong> Compute the Hausdorff dimension of the Cantor set using the self-similarity formula. Verify by showing \\(\\mathcal{H}^s(C) > 0\\) for \\(s = \\log 2/\\log 3\\).',
                    hint: 'The Cantor set is the attractor of an IFS with 2 maps, each with ratio 1/3. For the lower bound, use the natural probability measure on \\(C\\) and the mass distribution principle.',
                    solution: 'Self-similarity: \\(C = \\phi_1(C) \\cup \\phi_2(C)\\) where \\(\\phi_1(x) = x/3\\) and \\(\\phi_2(x) = (x+2)/3\\), with open set condition satisfied by \\((0,1)\\). So \\(\\dim_H = \\log 2/\\log 3\\). For the lower bound, define the natural measure \\(\\mu\\) on \\(C\\): at level \\(k\\), assign mass \\(2^{-k}\\) to each of the \\(2^k\\) intervals of length \\(3^{-k}\\). For any set \\(U\\) with \\(\\operatorname{diam}(U) \\leq 3^{-k}\\), \\(U\\) intersects at most 2 level-\\((k+1)\\) intervals, so \\(\\mu(U) \\leq 2 \\cdot 2^{-(k+1)} = 2^{-k}\\). Since \\(\\operatorname{diam}(U) \\geq 3^{-(k+1)}\\), \\(\\mu(U) \\leq 2^{-k} = (3^{-k})^s \\leq (3 \\cdot \\operatorname{diam}(U))^s = 3^s (\\operatorname{diam}(U))^s\\). By the mass distribution principle, \\(\\mathcal{H}^s(C) \\geq \\mu(C)/3^s = 1/3^s > 0\\).'
                },
                {
                    question: '<strong>[Section 3, 4 stars]</strong> Prove that \\(\\dim_H(A \\times B) \\geq \\dim_H(A) + \\dim_H(B)\\) for any \\(A \\subseteq \\mathbb{R}^m\\), \\(B \\subseteq \\mathbb{R}^n\\). (Equality can fail in general.)',
                    hint: 'Use the Frostman lemma approach: if \\(\\mu\\) and \\(\\nu\\) are measures supported on \\(A\\) and \\(B\\) with suitable energy bounds, consider \\(\\mu \\times \\nu\\) on \\(A \\times B\\).',
                    solution: 'Let \\(s < \\dim_H(A)\\) and \\(t < \\dim_H(B)\\). By the Frostman lemma, there exist measures \\(\\mu\\) on \\(A\\) and \\(\\nu\\) on \\(B\\) with \\(\\mu(B_r(x)) \\leq C r^s\\) and \\(\\nu(B_r(y)) \\leq C r^t\\) for all \\(r > 0\\). The product measure \\(\\mu \\times \\nu\\) on \\(A \\times B\\) satisfies \\((\\mu \\times \\nu)(B_r(x,y)) \\leq \\mu(B_r(x)) \\cdot \\nu(B_r(y)) \\leq C^2 r^{s+t}\\). By the mass distribution principle (converse of Frostman), \\(\\mathcal{H}^{s+t}(A \\times B) \\geq (\\mu \\times \\nu)(A \\times B)/C^2 > 0\\). Hence \\(\\dim_H(A \\times B) \\geq s + t\\). Taking \\(s \\to \\dim_H(A)\\) and \\(t \\to \\dim_H(B)\\) gives the result.'
                },
                // --- SECTION 4 EXERCISES (3 exercises) ---
                {
                    question: '<strong>[Section 4, 3 stars]</strong> Use the area formula to derive the surface area of the unit sphere \\(S^{n-1} \\subset \\mathbb{R}^n\\). Specifically, parametrize the upper hemisphere by \\(f(x) = (x, \\sqrt{1-|x|^2})\\) for \\(x \\in B^{n-1}\\) and compute \\(J_{n-1}f\\).',
                    hint: '\\(Df\\) is an \\(n \\times (n-1)\\) matrix. Compute \\(Df^T Df\\) and its determinant. The last row of \\(Df\\) is \\(-x_i / \\sqrt{1-|x|^2}\\).',
                    solution: 'Write \\(f(x_1, \\ldots, x_{n-1}) = (x_1, \\ldots, x_{n-1}, \\sqrt{1 - \\sum x_i^2})\\). The Jacobian matrix \\(Df\\) is \\(n \\times (n-1)\\) with \\(Df_{ij} = \\delta_{ij}\\) for \\(i \\leq n-1\\) and \\(Df_{n,j} = -x_j/\\sqrt{1-|x|^2}\\). Then \\(Df^T Df = I_{n-1} + \\frac{xx^T}{1-|x|^2}\\). By the matrix determinant lemma, \\(\\det(Df^T Df) = 1 + \\frac{|x|^2}{1-|x|^2} = \\frac{1}{1-|x|^2}\\). So \\(J_{n-1}f = (1-|x|^2)^{-1/2}\\). The area of the upper hemisphere is \\(\\int_{B^{n-1}} (1-|x|^2)^{-1/2}\\,dx\\). Doubling (for both hemispheres) gives \\(\\mathcal{H}^{n-1}(S^{n-1}) = 2\\int_{B^{n-1}} (1-|x|^2)^{-1/2}\\,dx = n\\omega_n\\), where \\(\\omega_n\\) is the volume of the unit \\(n\\)-ball.'
                },
                {
                    question: '<strong>[Section 4, 3 stars]</strong> Using the coarea formula with \\(f(x) = |x|\\), derive the polar-coordinates integration formula \\(\\int_{\\mathbb{R}^n} g(x)\\,dx = \\int_0^\\infty \\left(\\int_{S_r} g\\,d\\mathcal{H}^{n-1}\\right) dr\\), where \\(S_r\\) is the sphere of radius \\(r\\).',
                    hint: 'Compute \\(J_1 f(x) = |\\nabla f(x)| = 1\\) for \\(f(x) = |x|\\). The level sets \\(f^{-1}(r) = S_r\\).',
                    solution: 'For \\(f(x) = |x|\\), \\(\\nabla f(x) = x/|x|\\) for \\(x \\neq 0\\), so \\(|\\nabla f| = 1\\). Thus \\(J_1 f \\equiv 1\\) a.e. The coarea formula gives \\(\\int_{\\mathbb{R}^n} g(x) \\cdot 1\\,dx = \\int_0^\\infty \\left(\\int_{f^{-1}(r)} g\\,d\\mathcal{H}^{n-1}\\right) dr = \\int_0^\\infty \\left(\\int_{S_r} g\\,d\\mathcal{H}^{n-1}\\right) dr\\). This is precisely the polar-coordinates formula. In particular, taking \\(g \\equiv 1\\) on \\(B_R\\): \\(\\omega_n R^n = \\int_0^R n\\omega_n r^{n-1}\\,dr\\), confirming that \\(\\mathcal{H}^{n-1}(S_r) = n\\omega_n r^{n-1}\\).'
                },
                {
                    question: '<strong>[Section 4, 4 stars]</strong> Explain why the Federer-Fleming compactness theorem is the natural analogue of the Bolzano-Weierstrass theorem for surfaces. Why does working with currents (rather than parameterized surfaces) make this compactness possible?',
                    hint: 'Think about what fails for sequences of parameterized surfaces: the parameterizations can degenerate. Currents avoid this by measuring surfaces via integration against forms.',
                    solution: 'Bolzano-Weierstrass says: bounded sequences in \\(\\mathbb{R}^n\\) have convergent subsequences. For surfaces, "bounded" means bounded mass (area). But parameterized surfaces \\(\\phi_n: M \\to \\mathbb{R}^n\\) can degenerate (the parameterization can crumple, develop folds, etc.) even if the areas remain bounded, so no subsequence converges as parameterized maps. Currents resolve this by defining a surface not by how it is parameterized but by what it does to test forms: \\(T(\\omega) = \\int_S \\omega\\). In the flat norm topology, \\(T_n \\to T\\) means \\(\\int_{S_n} \\omega \\to \\int_S \\omega\\) in a controlled way. This is analogous to weak-* convergence of measures. The Banach-Alaoglu theorem (bounded sets are weak-* compact) provides the underlying compactness. The integer-multiplicity condition and boundary-mass bound give the additional control needed for the limit to remain an integral current.'
                },
                // --- SECTION 5 EXERCISES (3 exercises) ---
                {
                    question: '<strong>[Section 5, 3 stars]</strong> Let \\(\\mu = \\frac{1}{3}\\delta_0 + \\frac{1}{3}\\delta_1 + \\frac{1}{3}\\delta_2\\) and \\(\\nu = \\frac{1}{2}\\delta_0 + \\frac{1}{2}\\delta_2\\) on \\(\\{0, 1, 2\\}\\) with the Euclidean metric and cost \\(c(x,y) = |x - y|^2\\). Find the optimal transport plan and compute \\(W_2(\\mu, \\nu)\\).',
                    hint: 'Write out the constraints on the coupling matrix \\(\\pi_{ij}\\) and minimize \\(\\sum \\pi_{ij}(i-j)^2\\). The problem is a small linear program.',
                    solution: 'The coupling \\(\\pi\\) is a \\(3 \\times 2\\) matrix with rows summing to \\((1/3, 1/3, 1/3)\\) and columns summing to \\((1/2, 1/2)\\). Variables: \\(\\pi_{00}, \\pi_{02}, \\pi_{10}, \\pi_{12}, \\pi_{20}, \\pi_{22}\\) with \\(\\pi_{i0} + \\pi_{i2} = 1/3\\) and column sums \\(= 1/2\\). Cost: \\(\\sum \\pi_{ij}(i-j)^2 = 0 \\cdot \\pi_{00} + 4\\pi_{02} + 1\\cdot\\pi_{10} + 1\\cdot\\pi_{12} + 4\\pi_{20} + 0\\cdot\\pi_{22}\\). To minimize, we want to avoid moving mass far. Optimal: \\(\\pi_{00} = 1/3, \\pi_{02} = 0, \\pi_{10} = 1/6, \\pi_{12} = 1/6, \\pi_{20} = 0, \\pi_{22} = 1/3\\). Check: row sums = \\((1/3, 1/3, 1/3)\\) \\(\\checkmark\\), column sums = \\((1/3 + 1/6, 1/6 + 1/3) = (1/2, 1/2)\\) \\(\\checkmark\\). Cost = \\(0 + 0 + 1/6 + 1/6 + 0 + 0 = 1/3\\). \\(W_2 = \\sqrt{1/3} = 1/\\sqrt{3} \\approx 0.577\\).'
                },
                {
                    question: '<strong>[Section 5, 3 stars]</strong> Prove that \\(W_1(\\mu, \\nu) = \\int_0^1 |F_\\mu^{-1}(t) - F_\\nu^{-1}(t)|\\,dt\\) for probability measures \\(\\mu, \\nu\\) on \\(\\mathbb{R}\\), where \\(F_\\mu^{-1}\\) is the quantile function.',
                    hint: 'In 1D, the optimal coupling for \\(W_1\\) (with cost \\(|x - y|\\)) sends quantile \\(t\\) of \\(\\mu\\) to quantile \\(t\\) of \\(\\nu\\). Alternatively, use the Kantorovich-Rubinstein duality \\(W_1 = \\int |F_\\mu(x) - F_\\nu(x)|\\,dx\\).',
                    solution: 'For \\(p = 1\\) on \\(\\mathbb{R}\\), the optimal transport map is the monotone rearrangement: \\(T = F_\\nu^{-1} \\circ F_\\mu\\). Equivalently, the coupling \\(\\pi\\) concentrates on the graph of \\(T\\). By the substitution \\(t = F_\\mu(x)\\) (which has distribution Uniform(0,1) under \\(\\mu\\)): \\(W_1 = \\int |x - T(x)|\\,d\\mu(x) = \\int_0^1 |F_\\mu^{-1}(t) - F_\\nu^{-1}(t)|\\,dt\\). Alternatively, Kantorovich-Rubinstein duality gives \\(W_1 = \\sup_{\\mathrm{Lip}(f) \\leq 1} \\int f\\,(d\\mu - d\\nu) = \\int_{-\\infty}^\\infty |F_\\mu(x) - F_\\nu(x)|\\,dx\\), which equals the quantile formula by Fubini.'
                },
                {
                    question: '<strong>[Section 5, 5 stars]</strong> (Capstone) This course has covered sigma-algebras, Lebesgue measure, integration, convergence theorems, \\(L^p\\) spaces, Radon-Nikodym, product measures, differentiation, Haar measure, and Hausdorff measure. Write a one-page essay (or structured argument) showing how these topics form a logical chain. For each major theorem (MCT, DCT, Radon-Nikodym, Fubini, Riesz representation, Haar existence), identify exactly which earlier results it depends on.',
                    hint: 'The dependency chain roughly follows the chapter order. Key links: MCT uses properties of the Lebesgue integral built from simple functions. DCT uses MCT + Fatou. Radon-Nikodym uses the Riesz representation on \\(L^2\\). Fubini uses MCT on sections. Riesz representation (for \\(C_c\\)) uses outer measure construction. Haar uses Riesz representation + Tychonoff.',
                    solution: 'Dependency chain: (1) Sigma-algebras and measures (axioms). (2) Outer measures and Caratheodory extension give Lebesgue measure on \\(\\mathbb{R}^n\\). (3) Measurable functions and the Lebesgue integral, built from simple function approximation. (4) MCT: uses monotone limits of simple functions and the definition of the integral as a supremum. (5) Fatou: immediate from MCT applied to \\(\\inf_{k \\geq n} f_k\\). (6) DCT: uses Fatou applied to \\(g + f_n\\) and \\(g - f_n\\). (7) \\(L^p\\) spaces: completeness (Riesz-Fischer) uses MCT to identify limits of Cauchy sequences. (8) Radon-Nikodym: Hilbert space proof uses the Riesz representation theorem on \\(L^2(\\mu + \\nu)\\), which requires completeness of \\(L^2\\). (9) Product measures and Fubini: Tonelli (non-negative case) uses MCT on sections; Fubini (integrable case) uses DCT. (10) Differentiation of measures uses Radon-Nikodym + Vitali covering. (11) Riesz representation for positive functionals on \\(C_c(X)\\) constructs a measure via Caratheodory from an outer measure built from the functional. (12) Haar existence uses the Riesz representation theorem (Step 3 of the proof) and Tychonoff (to extract a limit of approximate measures). (13) Hausdorff measure uses the Caratheodory construction (metric outer measure). The chain is: axioms -> outer measures -> Lebesgue integral -> MCT -> Fatou/DCT -> L^p completeness -> Radon-Nikodym -> Fubini -> Riesz representation -> Haar/Hausdorff. Each level depends on the ones below.'
                }
            ]
        }
    ]
});
